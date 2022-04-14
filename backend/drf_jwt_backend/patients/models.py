
from operator import mod
from django.db import models
from django.contrib.auth.models import User
from providers.models import Provider

# Create your models here.

class Patient(models.Model):
    providers = models.ManyToManyField(Provider)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=50)
    guardian_name = models.CharField(max_length=50)
    guardian_relationship = models.CharField(max_length=50)
    primary_number = models.IntegerField()
    address = models.TextField()
    # can I make the address variable contain an array of the components it needs?
    diagnoses = models.CharField(max_length=1000)
    needs_pt = models.BooleanField(default=False)
    needs_bt = models.BooleanField(default=False)
    needs_st = models.BooleanField(default=False)
    needs_ot = models.BooleanField(default=False)
    recertification_date = models.CharField(max_length=10)
    # research how to incorporate DateFields and how to get mm/dd/yyyy, also allow future
    summary_of_care_notes = models.TextField()
    visits = models.CharField(max_length=25)
    

class Address(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, related_name='+')
    street = models.CharField(verbose_name="Street", max_length=200)
    city = models.CharField(verbose_name="City", max_length=100)
    zip_code = models.CharField(verbose_name="Zip Code", max_length=10)
    longitude = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50)
    

class Visit(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, related_name='+')
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE, null=True, related_name='+')
    start = models.DateTimeField()
    end = models.DateTimeField()
    was_attended = models.BooleanField(default=False)
    makeup_needed = models.BooleanField(default=False)
    

class Note(models.Model):
    visit = models.ForeignKey(Visit, on_delete=models.CASCADE, null=True, related_name='+')
    note = models.TextField()

class Summary_of_care(models.Model):
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE, null=True, related_name='+')
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, related_name='+')
    date = models.CharField(max_length=10)
    summary_notes = models.TextField()


