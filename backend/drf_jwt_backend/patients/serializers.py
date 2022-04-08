from dataclasses import fields
from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'first_name', 'last_name', 'age', 'sex', 'guardian_name', 'guardian_relationship', 'primary_number', 'address', 'diagnoses', 'services_needed', 'summary_of_care_notes', 'user_id']
