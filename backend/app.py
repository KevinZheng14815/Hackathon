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
import pytz
import g


GSPC100 = yf.Ticker("^GSPC")
hist = GSPC100.history(period = "max")
hist.index = hist.index.tz_localize(None)
pandas_frame_GSPC = pd.DataFrame(hist)
# ns = pytz.timezone('ns')
# pandas_frame_GSPC.index = pandas_frame_GSPC.index.tz_localize(pytz.utc).tz_convert(ns)
# pandas_frame_GSPC = pd.to_datetime(pandas_frame_GSPC, utc = False)

data_brent_futures = pd.read_csv("BrentOilPrices.csv", parse_dates =['Date'])
saudi_prod = pd.read_csv("saudi-arabia-crude-oil-production-chart.csv", parse_dates = ['date'] )
airplane_data = pd.read_csv("International_Report_Departures.csv", parse_dates = ['data_dte'])
us_prod = pd.read_csv("U.S._crude_oil_production.csv", parse_dates = ['Date'])

table = pd.pivot_table(airplane_data, values = 'Total', index = ['data_dte'],aggfunc = np.sum)
merged_data = table.merge(data_brent_futures, left_on = 'data_dte', right_on = 'Date')
merged_data = merged_data.merge(pandas_frame_GSPC, left_on = 'Date',  right_on = 'Date')
merged_data = merged_data.merge(saudi_prod, left_on = 'Date',  right_on = 'date')
merged_data = merged_data.merge(us_prod, left_on = 'date',  right_on = 'Date')
merged_data = merged_data.drop(columns = ['High', 'Low','Close','Volume','Dividends','Stock Splits'])

df = merged_data.drop('date',1)
df['idx'] = np.arange(0,56)
X = df.drop(columns = ['Price', 'Date_x', 'Date_y'])
Y = df['Price']

regr = KernelRidge()
regr.fit(X,Y)

KernelRidge()

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS' ] = 'Content-Type'
# months = 200
# airline_change = 0
# stock_change = 0
# saudi_prod_change = 0
# us_prod_change = 0
# airline_change = 0
# months_in_future = months

# scaled_airline = X.iloc[-1]['Total'] * (1 + airline_change/100)
# scaled_stock = X.iloc[-1]['Open'] * (1 + stock_change/100)
# scaled_saudi_prod = X.iloc[-1]['saudi_prod'] * (1 + saudi_prod_change/100)
# scaled_us_prod = X.iloc[-1]['us_prod'] * (1 + us_prod_change/100)
# scaled_months = X.iloc[-1]['idx'] + months_in_future
# print(scaled_airline, scaled_stock, scaled_saudi_prod, scaled_us_prod, scaled_months)
# prediction = regr.predict ([[scaled_airline, scaled_stock, scaled_saudi_prod, scaled_us_prod, scaled_months]])

# print(str(prediction[0]))

@app.route("/oil_change")
@cross_origin()
def calculate_oil_percentage():
    print(request.args.get('months'))
    #print(request.args.get('airline))
    print (request.args.get('stock_change'))
    print (request.args.get('saudi_prod_change'))
    print(request.args.get('us_prod_change'))
    print (request.args.get('airline_change'))
    months_in_future = int(request.args.get('months'))
    us_prod_change = int(request.args.get('us_prod_change'))
    saudi_prod_change = int(request.args.get('saudi_prod_change'))
    airline_change = int(request.args.get('airline_change'))
    stock_change = int(request.args.get('stock_change'))
    scaled_airline = X.iloc[-1]['Total'] * (1 + airline_change/100)
    scaled_stock = X.iloc[-1]['Open'] * (1 + stock_change/100)
    scaled_saudi_prod = X.iloc[-1]['saudi_prod'] * (1 + saudi_prod_change/100)
    scaled_us_prod = X.iloc[-1]['us_prod'] * (1 + us_prod_change/100)
    scaled_months = X.iloc[-1]['idx'] + months_in_future
    print(scaled_airline, scaled_stock, scaled_saudi_prod, scaled_us_prod, scaled_months)
    prediction = regr.predict([[scaled_airline, scaled_stock, scaled_saudi_prod, scaled_us_prod, scaled_months]])
    return str(round(prediction[0], 4))

@app.route('/gptj_query')
def gptj_main(query_string):
    
