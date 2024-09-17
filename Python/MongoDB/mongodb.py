import pymongo

mongo_client = pymongo.MongoClient('mongodb://localhost:27017/')

mongo_db = mongo_client['testing_database']

customer_collection = mongo_db['customers']

"""Adding single data to collection"""

# customer_data = {
#     "name": "Antony Stark",
#     "age": 57
# }

# new_customer = customer_collection.insert_one(customer_data)


"""Adding multiple data to collection"""

# customer_data = [
#     {
#         "name": "Bruce Banner",
#         "age": 52
#     },
#     {
#         "name": "Peter Parker",
#         "age": 21
#     }
# ]

# new_customer = customer_collection.insert_many(customer_data)


"""Get all data from collection"""

# data = customer_collection.find()

# for x in data:

#     print(x)

"""To get only specific fields in collections"""

# data = customer_collection.find({}, {"_id": 0,"name": 1})

# for x in data:

#     print(x)


"""Filter a set of data from a collection"""

# data = customer_collection.find({'name': "Bruce Banner"})

# for x in data:

#     print(x)


"""Filtering with a range of values for same fields"""

# filter_query = {"age": {"$gt": 20, "$lt": 50}}

# data = customer_collection.find(filter_query, {"_id": 0,"name": 1})

# for x in data:

#     print(x)


"""Sorting data based on a field"""

# data = customer_collection.find().sort("name")
# data = customer_collection.find().sort("name", -1) #desc

# for x in data:

#     print(x)


"""Delete data from collection"""

# delete_query = {
#     "name": "Peter Parker"
# }

# customer_collection.delete_one(delete_query) # Single data
# customer_collection.delete_many(delete_query) # Multiple data


"""Update data in a collection"""

# selecter_query = {"name": "Bruce Banner"}
# new_data = {"$set": {"age": 30}}

# update_data = customer_collection.update_one(selecter_query, new_data) 
# update_data = customer_collection.update_many(selecter_query, new_data)


"""Delete Collection"""

# customer_collection.drop()
