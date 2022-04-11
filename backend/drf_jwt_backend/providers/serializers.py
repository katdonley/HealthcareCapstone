from dataclasses import fields
from rest_framework import serializers
from .models import Provider

class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ['id', 'first_name', 'last_name', 'services_provided']
