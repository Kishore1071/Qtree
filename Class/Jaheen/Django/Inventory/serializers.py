from rest_framework import serializers
from .models import Product, Category

class Category_Serializer(serializers.ModelSerializer):

    class Meta:

        model = Category
        fields = '__all__'


class Product_Serializer(serializers.ModelSerializer):

    class Meta:

        model = Product
        fields = '__all__'
        # fields = ['product_name', 'price']