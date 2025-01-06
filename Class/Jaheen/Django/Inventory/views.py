from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Product
from .serializers import Product_Serializer, Category_Serializer

class TestApi(APIView):

    def get(self, request):

        student_data = {
            "name": "Jaheen",
            "age": 22
        }

        return Response(student_data)
    
    def post(self, request):

        print(request.data)

        return Response('ok')
    
    def patch(self, request, id):

        print(id)

        print(request.data)

        return Response('Updated')
    
    def delete(self, request, id):

        print(id)

        return Response('Deleted')
    

class CategroyApi(APIView):

    def get(self, request):

        category_data = Category.objects.all()

        all_category = []

        for c in category_data:

            category_dict = {
                'id': c.id,
                "category_name": c.category_name,
                "is_food": c.is_food
            }

            all_category.append(category_dict)

        return Response(all_category)

    def post(self, request):

        new_category = Category(category_name = request.data['category_name'], is_food = request.data['is_food'])

        new_category.save()

        return Response("Data Saved")
    
    def patch(self, request, id):

        selected_category = Category.objects.filter(id = id)

        selected_category.update(category_name = request.data['category_name'], is_food = request.data['is_food'])

        return Response('Data Updated')
    
    def delete(self, request, id):

        selected_category = Category.objects.get(id = id)

        selected_category.delete()

        category_data = Category.objects.all()

        return Response(Category_Serializer(category_data, many=True).data)


class ProductApi(APIView):

    def get(self, request):

        all_products = Product.objects.all()

        product_data =  Product_Serializer(all_products, many=True).data

        return Response(product_data)
    
    def post(self, request):

        new_product = Product(category_ref_id = request.data['category_ref'],product_name = request.data['product_name'], code = request.data['code'], price = request.data['price'], gst = request.data['gst'])

        new_product.save()

        return Response('Data Saved')
    
    def patch(self, request, id):

        selected_product = Product.objects.filter(id = id)

        selected_product.update(product_name = request.data['product_name'], code = request.data['code'], price = request.data['price'], gst = request.data['gst'])

        return Response('Data Updated')
    
    def delete(self, request, id):
        
        selected_product = Product.objects.get(id = id)

        selected_product.delete()

        return Response('Data Deleted')



