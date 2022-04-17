from django.contrib import admin
from .models import Address, Patient, Visit, Note, Summary_of_care

admin.site.register(Patient)
admin.site.register(Visit)
admin.site.register(Address)
admin.site.register(Note)
admin.site.register(Summary_of_care)
# Register your models here.
