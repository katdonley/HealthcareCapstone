from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Provider(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    servicesProvided = models.CharField(max_length=100)

    