from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Provider
from .serializers import ProviderSerializer
from patients.models import Patient
from patients.serializers import PatientSerializer
from django.contrib.auth.models import User


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_providers(request):
    providers = Provider.objects.all()
    serializer = ProviderSerializer(providers, many=True)
    return Response(serializer.data)


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def user_providers(request):
    if request.method == 'POST':
        serializer = ProviderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #elif request.method == 'GET':
    #    patients = Patient.objects.filter(user_id=request.user.id)
    #    serializer = PatientSerializer(patients, many=True)
    #    return Response(serializer.data)