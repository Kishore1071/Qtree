import pandas

csv = pandas.read_csv('data.csv')
json = pandas.read_json('data.json')
excel = pandas.read_excel('data.xls')

all_data = csv.to_string()

data_from_start_limit = csv.head(20)

data_from_end_limit = csv.tail(3)

information = csv.info()


print(excel.to_string())
