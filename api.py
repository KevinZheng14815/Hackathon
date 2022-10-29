import pandas as pd
import yfinance as yf
import numpy as np

FTSE100 = yf.Ticker("^FTSE")
hist = FTSE100.history(period = "max")
pandas_frame_FTSE = pd.DataFrame(hist)

data_brent_futures = pd.read_csv("BrentOilPrices.csv", parse_dates =['Date'])
airplane_data = pd.read_csv("International_Report_Departures.csv", parse_dates = ['data_dte'])
saudi_prod = pd.read_csv("saudi-arabia-crude-oil-production-chart.csv", parse_dates = ['date'] )
us_reserve = pd.read_excel("MTTSTUS1m.xls", parse_dates = ['Date'])

table = pd.pivot_table(airplane_data, values = 'Total', index = ['data_dte'],aggfunc = np.sum)
merged_data = table.merge(data_brent_futures, left_on = 'data_dte', right_on = 'Date')
merged_data = merged_data.merge(pandas_frame_FTSE, left_on = 'Date',  right_on = 'Date')
merged_data = merged_data.merge(saudi_prod, left_on = 'Date',  right_on = 'date')
merged_data =  merged_data.merge(us_reserve, left_on = 'date',  right_on = 'Date')
merged_data =  merged_data.drop(columns = ['High', 'Low','Close','Volume','Dividends','Stock Splits'])

df = merged_data.drop('date',1)
df['idx'] = np.arange(0,203)
X = df.drop(columns = ['Price', 'Date_x', 'Date_y'])
Y = df['Price']

from sklearn import svm
from sklearn import linear_model
from sklearn.kernel_ridge import KernelRidge
regr = KernelRidge()
regr.fit(X,Y)

KernelRidge()

from werzeug.wrappers import Request, Response 
from flask import Flask, request
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
