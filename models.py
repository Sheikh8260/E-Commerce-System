from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class Order(models.Model):
    user_id = models.IntegerField()
    products = models.JSONField()
    status = models.CharField(max_length=50, default='pending')

    def __str__(self):
        return f'Order {self.id}'