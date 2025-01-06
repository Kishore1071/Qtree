from django.shortcuts import render, redirect
from .forms import *
from .models import *

def HomePage(request):

    return render(request, 'home.html')


def CategoryAdd(request):


    data = {
        "category_form": CategoryForm()
    }

    if request.method == 'POST':

        print(request.POST['category_name'])
        print(request.POST['description'])

        new_category = Category(category_name = request.POST['category_name'], description = request.POST['description'])

        new_category.save()

        return redirect('/inventory/category/list/')

    return render(request, 'category/category_add.html', data)

def CategoryList(request):

    context = {
        "all_category": Category.objects.all()
    }

    return render(request, 'category/category_list.html', context)

def CategoryUpdate(request, id):

    selected_category = Category.objects.get(id = id)

    data = {
        "category_form": CategoryForm(instance=selected_category)
    }

    if request.method == 'POST':

        update_category = Category.objects.filter(id = id)

        update_category.update(category_name = request.POST['category_name'], description = request.POST['description'])

        return redirect('/inventory/category/list/')


    return render(request, 'category/category_add.html', data)

def DeleteCategory(request, id):

    selected_category = Category.objects.get(id = id)

    selected_category.delete()

    return redirect('/inventory/category/list/')



def ProductList(request):

    context = {
        "all_products": Product.objects.all()
    }

    return render(request, 'products/product_list.html', context)

def ProductAdd(request):

    context = {
        'product_form': ProductForm()
    }

    if request.method == 'POST':

        new_product = Product(category_ref_id = request.POST['category_ref'], product_name = request.POST['product_name'], code = request.POST['code'], price = request.POST['price'], gst = request.POST['gst'])

        new_product.save()

        return redirect('/inventory/product/list/')

    return render(request, 'products/product_add.html', context)


def ProductUpdate(request, id):


    selected_product = Product.objects.get(id = id)

    context = {
        'product_form': ProductForm(instance=selected_product)
    }

    if request.method == 'POST':

        product_update = Product.objects.filter(id = id)

        product_update.update(category_ref_id = request.POST['category_ref'], product_name = request.POST['product_name'], code = request.POST['code'], price = request.POST['price'], gst = request.POST['gst'])

        return redirect('/inventory/product/list/')

    return render(request, 'products/product_add.html', context)


def ProductDelete(request, id):

    selected_product = Product.objects.get(id = id)

    selected_product.delete()

    return redirect('/inventory/product/list/')






























