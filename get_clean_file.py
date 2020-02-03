import glob
import re
import pandas as pd

from datetime import datetime
today = datetime.today().strftime("%m %d %H%M")

def get_number(file_name):
    try:
        return int(re.findall(r'''\d+''',file_name)[0])
    except:
        return 0

def get_latest_file():
    latest_download_num = max([get_number(i) for i in (glob.glob(r"C:\Users\Yasch\Downloads\export*.csv"))])
    try:
        return glob.glob(r"C:\Users\Yasch\Downloads\export (%s).csv"%latest_download_num)[0]
    except:
        return glob.glob(r"C:\Users\Yasch\Downloads\export.csv")

latest_file=get_latest_file()

df = pd.read_csv(latest_file,sep='|')

df.columns =["Name",'Job Description','Location',"About","Company Name"]
df.to_excel((r'C:\Users\Yasch\Desktop\Peter %s.xlsx'%today),index = False)
