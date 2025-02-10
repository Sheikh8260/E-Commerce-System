from rest_framework import generics
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderCreate(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderDetail(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class AdminManageProducts(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class AdminManageOrders(generics.UpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer