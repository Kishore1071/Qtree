from django.db import models
from Inventory.models import *


class Bill(models.Model):

    customer_name = models.CharField(max_length=100, null=True)
    bill_number = models.CharField(max_length=100, null=True)
    bill_date = models.DateField(auto_now=True)
    product_ref = models.ForeignKey(Product, null=True, on_delete=models.CASCADE)
    quantity = models.FloatField(default=0)
    amount = models.FloatField(default=0)
    gst_amount = models.FloatField(default=0)
    bill_amount = models.FloatField(default=0)

    def __str__(self):

        return self.bill_number
