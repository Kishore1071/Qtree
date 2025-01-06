from django.urls import path
from .views import *

urlpatterns = [
    path('home/', HomePage),
    path('category/add/', CategoryAdd),
    path('category/list/', CategoryList),
    path('category/update/<int:id>/', CategoryUpdate, name='category_update'),
    path('category/delete/<int:id>/', DeleteCategory, name='category_delete'),


    path('product/list/', ProductList),
    path('product/add/', ProductAdd),
    path('product/update/<int:id>/', ProductUpdate, name='product_update'),
    path('product/delete/<int:id>/', ProductDelete, name='product_delete'),
]