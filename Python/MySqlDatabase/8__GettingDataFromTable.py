import mysql.connector

mysql_db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "1234",
    database="test_db"
)

mysql_cursor = mysql_db.cursor()

# Select All Column

# mysql_cursor.execute("select * from customers")

customer_data = mysql_cursor.fetchall()

for customer in customer_data:

    print(customer)


# Select Specific Column

# mysql_cursor.execute("select name from customers")

# customer_data = mysql_cursor.fetchall()

# for customer in customer_data:

#     print(customer)