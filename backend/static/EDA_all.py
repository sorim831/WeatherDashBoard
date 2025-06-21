import matplotlib.pyplot as plt
import seaborn as sns

plt.rc('font', size=5)
df.iloc[:,:].hist()
plt.tight_layout()