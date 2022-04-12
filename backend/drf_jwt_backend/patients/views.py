from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Patient
from .serializers import PatientSerializer
from providers.models import Provider
from providers.serializers import ProviderSerializer
from django.contrib.auth.models import User


# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_patients(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def user_patients(request):
    if request.method == 'POST':
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #elif request.method == 'GET':
    #    patients = Provider.objects.filter(user_id=request.user.id)
    #    serializer = ProviderSerializer(patients, many=True)
    #    return Response(serializer.data)
