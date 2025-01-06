from django.shortcuts import render, redirect
from .models import *
from .forms import *


def BillList(request):

    return render(request, 'bill/bill_list.html')


def BillAdd(request):

    context = {
        'bill_form': BillForm()
    }

    return render(request, 'bill/bill_add.html', context)
