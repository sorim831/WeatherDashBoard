from sklearn.preprocessing import MinMaxScaler, LabelEncoder
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Embedding, LSTM, Dense, Concatenate, Flatten
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint
from sklearn.metrics import mean_squared_error

# === 1. 사용할 컬럼 선택 === #
selected_features = [
    'train_heat.ta', 'train_heat.wd', 'train_heat.ws', 'train_heat.rn_day',
    'train_heat.rn_hr1', 'train_heat.hm', 'train_heat.si',
    'train_heat.ta_chi', 'branch_id_encoded', 'demand_diff', 'train_heat.heat_demand'
]

# 결측 제거
df2 = df1[selected_features + ['train_heat.branch_id']].dropna().reset_index(drop=True)

# === 2. Label Encoding (지점 임베딩용) === #
le = LabelEncoder()
df2['branch_id_encoded'] = le.fit_transform(df2['train_heat.branch_id'])

# === 3. 정규화 (수치형만) === #
numerical_features = [
    'train_heat.ta', 'train_heat.wd', 'train_heat.ws', 'train_heat.rn_day',
    'train_heat.rn_hr1', 'train_heat.hm', 'train_heat.si', 'train_heat.ta_chi'
]
scaler = MinMaxScaler()
df2[numerical_features] = scaler.fit_transform(df2[numerical_features])

# === 4. 시계열 형태로 변환 === #
def make_lstm_input(df, time_steps=24):
    X_num, X_branch, y_diff, y_heat = [], [], [], []
    for i in range(len(df) - time_steps):
        window = df.iloc[i:i+time_steps]
        X_num.append(window[numerical_features].values)
        X_branch.append(window['branch_id_encoded'].values[-1])
        y_diff.append(df.iloc[i + time_steps]['demand_diff'])
        y_heat.append(df.iloc[i + time_steps]['train_heat.heat_demand'])
    return np.array(X_num), np.array(X_branch), np.array(y_diff), np.array(y_heat)

X_num, X_branch, y_diff, y_heat = make_lstm_input(df2, time_steps=24)

# === 5. Train/Val/Test Split === #
n_total = len(X_num)
n_train = int(n_total * 0.8)
n_val = int(n_total * 0.1)

X_train = [X_num[:n_train], X_branch[:n_train]]
y_train = y_diff[:n_train]
X_val = [X_num[n_train:n_train+n_val], X_branch[n_train:n_train+n_val]]
y_val = y_diff[n_train:n_train+n_val]
X_test = [X_num[n_train+n_val:], X_branch[n_train+n_val:]]
y_test_diff = y_diff[n_train+n_val:]
y_test_heat = y_heat[n_train+n_val:]

# === 6. LSTM + Embedding 모델 구성 === #
n_features = len(numerical_features)

input_num = Input(shape=(24, n_features), name='numerical_input')
input_branch = Input(shape=(1,), name='branch_id_input')

branch_embed = Embedding(input_dim=19, output_dim=4, name='branch_embedding')(input_branch)
branch_flat = Flatten()(branch_embed)

x = LSTM(64)(input_num)
combined = Concatenate()([x, branch_flat])

x = Dense(64, activation='relu')(combined)
output = Dense(1, name='output')(x)

model = Model(inputs=[input_num, input_branch], outputs=output)
model.compile(optimizer='adam', loss='mse')


# === 7. 모델 학습 === #
callbacks = [
    EarlyStopping(patience=10, restore_best_weights=True),
    ModelCheckpoint("best_lstm_model.keras", save_best_only=True)
]

history = model.fit(
    X_train, y_train,
    validation_data=(X_val, y_val),
    epochs=10,
    batch_size=64,
    callbacks=callbacks,
    verbose=1
)

# === 8. 예측 후 heat_demand 복원 === #
y_pred_diff = model.predict(X_test).flatten()

# 예측 길이에 맞춰 prev_heat 자르기
prev_heat = y_heat[n_train+n_val-1:n_train+n_val-1+len(y_pred_diff)]

heat_demand_pred = prev_heat + y_pred_diff
true_heat = y_test_heat[:len(heat_demand_pred)]