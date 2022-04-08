from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Provider(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    services_provided = models.CharField(max_length=100)

