from django.urls import path
from .views import *

urlpatterns = [
    path('list/', BillList),
    path('add/', BillAdd)
]