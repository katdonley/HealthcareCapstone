from dataclasses import fields
from rest_framework import serializers

from providers.serializers import ProviderSerializer


from .models import Patient, Visit

class PatientSerializer(serializers.ModelSerializer):
    providers = ProviderSerializer(read_only = True, many=True)
    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name', 'age', 'sex', 'guardian_name', 'guardian_relationship', 'primary_number', 'address', 'diagnoses', 'needs_pt', 'needs_bt', 'needs_st', 'needs_ot', 'summary_of_care_notes', 'providers', 'visits']


class VisitSerializer(serializers.ModelSerializer):
    provider = ProviderSerializer(read_only = True, many=False)
    patient = PatientSerializer(read_only = True, many=False)
    class Meta:
        model = Visit
        fields = ['id', 'patient', 'provider', 'start', 'end', 'was_attended', 'makeup_needed']