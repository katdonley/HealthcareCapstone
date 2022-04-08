from datetime import date
from django.db import models
from django.contrib.auth.models import User
from providers.models import Provider

# Create your models here.

class Patient(models.Model):
    # patient = models.ManytoMany(Provider)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    sex = models.CharField(max_length=50)
    guardian_name = models.CharField(max_length=50)
    guardian_relationship = models.CharField(max_length=50)
    primary_number = models.IntegerField()
    address = models.CharField("Address line 1", max_length=200)
    # do I need an address model that flushes out all of the needed parts of an address?
    # can I make the address variable contain an array of the components it needs?
    diagnoses = models.CharField(max_length=1000)
    services_needed = models.CharField(max_length=1000)
    #recertification_date = models.DateField()
    # research how to incorporate DateFields and how to get mm/dd/yyyy, also allow future
    summary_of_care_notes = models.TextField() # do I need a new model for this?
    #visits = models.
    # do I need a new model for this?

#class Address(models.Model):
    #address = models.
    # look at google maps documentation for what the model needs

class Visit(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
#    provider_id = models.ForeignKey(Provider, on_delete=models.CASCADE)
#    date = models.DateField()
#    was_attended = 
#    makeup_needed = 
#    notes = models.

class Note(models.Model):
    visit_id = models.ForeignKey(Visit, )
    notes = models.TextField()

class Summary_of_care(models.Model):
    provider_id = models.ForeignKey(Provider, on_delete=models.CASCADE)
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    date = models.DateField()
    summary_notes = models.

class Summary_note(models.Model):
    summary_of_care_id = models.ForeignKey(Summary_of_care, on_delete=models.CASCADE)
    summary_note = models.TextField()

