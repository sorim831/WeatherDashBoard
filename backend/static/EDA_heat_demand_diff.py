import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df1['demand_diff'] = df1["train_heat.heat_demand"].diff()
df1_diff = df1['demand_diff'].dropna()
plt.figure(figsize=(14, 5))
plt.plot(df1_diff)
plt.xlabel('Time')
plt.ylabel('heat_demand')
plt.legend()
plt.grid(True)
plt.show()