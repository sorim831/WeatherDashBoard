from statsmodels.tsa.stattools import adfuller, kpss

sampled = df1["train_heat.heat_demand"].iloc[::6]  # 6시간 간격 샘플링

adf_result = adfuller(sampled.dropna())
print("ADF Statistic:", adf_result[0])
print("p-value:", adf_result[1])

"""
실행결과
ADF Statistic: -6.762107004566986
p-value: 2.775410144819105e-09
"""