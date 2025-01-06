from django import forms
from .models import *

class BillForm(forms.ModelForm):

    class Meta:

        model = Bill
        # fields = '__all__'
        fields = ['customer_name', 'bill_number', 'product_ref', 'quantity']

        widgets = {
            'customer_name': forms.TextInput(attrs={'class': 'form-control'}),
            'bill_number': forms.TextInput(attrs={'class': 'form-control'}),
            'product_ref': forms.Select(attrs={'class': 'form-control'}),
            'quantity': forms.NumberInput(attrs={'class': 'form-control'}),
        }