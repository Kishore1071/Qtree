import mysql.connector

mysql_db = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "1234",
    database="testing_db"
)

mysql_cursor = mysql_db.cursor()

# mysql_cursor.execute('create database testing_db')

# mysql_cursor.execute("create table products (id int auto_increment primary key , name varchar(255), address varchar(255))")

# mysql_cursor.execute("alter table customers add column course varchar(255)")

# mysql_cursor.execute("alter table customers drop column course")

# mysql_cursor.execute("alter table customers rename column age to customer_age")

# mysql_cursor.execute("alter table customers modify column customer_age varchar(255)")

# query = "insert into customers (name, address, customer_age) values (%s, %s, %s)"

# values = ("Shamiksa", "Perambalur", "18")

# mysql_cursor.execute(query, values)

# values = [
#     ("Shamiksa 1", "Perambalur", "18"),
#     ("Shamiksa 2", "Perambalur", "18"),
#     ("Shamiksa 3", "Perambalur", "18"),
# ]

# mysql_cursor.executemany(query, values)

# mysql_db.commit()

# mysql_cursor.execute('select * from customers')

# customer_data = mysql_cursor.fetchall()

# print(customer_data)

# mysql_cursor.execute('select name, id from customers where customer_age > 30 and address = "Mumbai"')

# customer_data = mysql_cursor.fetchall()

# print(customer_data)

# mysql_cursor.execute('select * from customers order by customer_age desc')

# customer_data = mysql_cursor.fetchall()

# print(customer_data)

# mysql_cursor.execute('delete from customers where id = 4')

# mysql_db.commit()

# mysql_cursor.execute('update customers set address = "Tiruppur" where id = 3 ')

# mysql_db.commit()

mysql_cursor.execute('drop table if exists products')




