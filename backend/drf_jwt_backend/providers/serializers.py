from dataclasses import fields
from rest_framework import serializers
from .models import Provider

class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ['id', 'first_name', 'last_name', 'provides_pt', 'provides_bt', 'provides_st', 'provides_ot', 'user_id']
