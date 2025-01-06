from django import forms
from .models import *

class CategoryForm(forms.ModelForm):

    class Meta:

        model = Category
        fields = '__all__'

        widgets = {
            'category_name': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.TextInput(attrs={'class': 'form-control'})
        }


class ProductForm(forms.ModelForm):

    class Meta:

        model = Product
        fields = '__all__'

        widgets = {
            'category_ref': forms.Select(attrs={'class': 'form-control'}),
            'product_name': forms.TextInput(attrs={'class': 'form-control'}),
            'code': forms.TextInput(attrs={'class': 'form-control'}),
            'price': forms.NumberInput(attrs={'class': 'form-control'}),
            'gst': forms.NumberInput(attrs={'class': 'form-control'})
        }







