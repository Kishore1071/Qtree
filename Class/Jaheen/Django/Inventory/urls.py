from django.urls import path
from .views import TestApi, CategroyApi, ProductApi

urlpatterns = [
    path('student/', TestApi.as_view()),
    path('student/<int:id>/', TestApi.as_view()),

    path('category/', CategroyApi.as_view()),
    path('category/<int:id>/', CategroyApi.as_view()),

    path('product/', ProductApi.as_view()),
    # path('category/<int:id>/', CategroyApi.as_view()),
]