from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Provider(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    provides_pt = models.BooleanField(default=False)
    provides_bt = models.BooleanField(default=False)
    provides_st = models.BooleanField(default=False)
    provides_ot = models.BooleanField(default=False)

