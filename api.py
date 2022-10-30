import pandas as pd
import yfinance as yf
import numpy as np
# from sklearn import svm
# from sklearn import linear_model
from scipy import stats
from scipy.stats import norm
from sklearn.kernel_ridge import KernelRidge
# from werzeug.wrappers import Request, Response # Unnecessary
from flask import Flask, request
from flask_cors import CORS, cross_origin


GSPC100 = yf.Ticker("^GSPC")
hist = GSPC100.history(period = "max")
pandas_frame_GSPC = pd.DataFrame(hist)

data_brent_futures = pd.read_csv("backend/BrentOilPrices.csv", parse_dates =['Date'])
airplane_data = pd.read_csv("backend/International_Report_Departures.csv", parse_dates = ['data_dte'])
saudi_prod = pd.read_csv("backend/saudi-arabia-crude-oil-production-chart.csv", parse_dates = ['date'] )
us_reserve = pd.read_csv("backend/U.S._crude_oil_production.csv", parse_dates = ['Date'])

table = pd.pivot_table(airplane_data, values = 'Total', index = ['data_dte'],aggfunc = np.sum)
merged_data = table.merge(data_brent_futures, left_on = 'data_dte', right_on = 'Date')
merged_data = merged_data.merge(pandas_frame_GSPC, left_on = 'Date',  right_on = 'Date')
merged_data = merged_data.merge(saudi_prod, left_on = 'Date',  right_on = 'date')
merged_data =  merged_data.merge(us_reserve, left_on = 'date',  right_on = 'Date')
merged_data =  merged_data.drop(columns = ['High', 'Low','Close','Volume','Dividends','Stock Splits'])

df = merged_data.drop('date',1)
df['idx'] = np.arange(0,203)
X = df.drop(columns = ['Price', 'Date_x', 'Date_y'])
Y = df['Price']

regr = KernelRidge()
regr.fit(X,Y)

KernelRidge()

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS' ] = 'Content-Type'
@app.route("/oil_change")
@cross_origin()
def calculate_oil_percentage():
    print(request.args.get ('months'))
    #print(request.args.get('airline))
    print (request.args.get ('stock_change'))
    print (request.args.get ('production_change'))
    print(request.args.get('reserve_change'))
    print (request.args.get('airline_change'))
    months_in_future = int(request.args.get('months'))
    airline_change = int (request.args.get('airline_hange'))
    stock_change = int (request.args.get('stock_change"))
    reserve_change = int (request.args.get ('reserve_change'))
    production_change = int(request.args.get ('production_hange'))
    scaled airline = X.iloc[-1]('Total'] * (1 + airline_change/100)
    scaled stock = X.iloc[-1]['Open'] " (1 + stock_change/100)
    scaled_production = X.iloc[-1]['saudi_prod'] * (1 + production_change/100)
    scaled reserve = X.iloc[-1]['reserve'] * (1 + reserve_change/100)
    scaled months = X.iloc[-1]('idx'] + months in future
    print(scaled airline, scaled stock, scaled production, scaled reserve, scaled months)
    prediction = regr.predict ([[scaled airline, scaled stock, scaled production, scaled reserve, scaled months]])
    return str(prediction[0])