from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Patient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=50)
    guardianName = models.CharField(max_length=50)
    guardianRelationship = models.CharField(max_length=50)
    primaryNumber = models.IntegerField()
    address = models.CharField("Address line 1", max_length=200)
    # do I need an address model that flushes out all of the needed parts of an address?
    # can I make the address variable contain an array of the components it needs?
    diagnoses = models.CharField(max_length=1000)
    servicesNeeded = models.CharField(max_length=1000)
    #recertificationDate = models.DateField()
    # research how to incorporate DateFields and how to get mm/dd/yyyy, also allow future
    summaryOfCareNotes = models.TextField() # do I need a new model for this?
    #visits = models.
    # do I need a new model for this?