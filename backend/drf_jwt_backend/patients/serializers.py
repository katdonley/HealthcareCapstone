from dataclasses import fields
from rest_framework import serializers
from providers.serializers import ProviderSerializer
from .models import Address, Patient, Visit, Note, Summary_of_care

class PatientSerializer(serializers.ModelSerializer):
    providers = ProviderSerializer(read_only = True, many=True)
    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name', 'age', 'sex', 'guardian_name', 'guardian_relationship', 'primary_number', 'address', 'diagnoses', 'needs_pt', 'needs_bt', 'needs_st', 'needs_ot', 'summary_of_care_notes', 'recertification_date', 'providers', 'visits']
        depth = 1
        

class VisitSerializer(serializers.ModelSerializer):
    provider = ProviderSerializer(read_only = True, many=False)
    patient = PatientSerializer(read_only = True, many=False)
    class Meta:
        model = Visit
        fields = ['id', 'patient', 'provider', 'start', 'end', 'was_attended', 'makeup_needed']
        depth = 1


class AddressSerializer(serializers.ModelSerializer):
    patient = PatientSerializer(read_only = True, many = False)
    class Meta:
        model = Address
        fields = ['id', 'patient', 'street', 'city', 'zip_code', 'LatLng']
        depth = 1

class NoteSerializer(serializers.ModelSerializer):
    visit = VisitSerializer(read_only = True, many = False)
    class Meta:
        model = Note
        fields = ['id', 'patient', 'provider', 'visit', 'note']

class SummaryOfCareSerializer(serializers.ModelSerializer):
    provider = ProviderSerializer(read_only = True, many = False)
    patient = PatientSerializer(read_only = True, many = False)
    class Meta:
        model = Summary_of_care
        fields = ['id', 'provider', 'patient', 'date', 'summary_notes']
        depth = 1