from django.shortcuts import get_object_or_404, render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Address, Note, Patient, Visit, Summary_of_care
from .serializers import PatientSerializer, VisitSerializer, AddressSerializer, NoteSerializer, SummaryOfCareSerializer
# from providers.models import Provider
# from providers.serializers import ProviderSerializer
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
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # elif request.method == 'GET':
    #    patients = Provider.objects.filter(user_id=request.user.id)
    #    serializer = ProviderSerializer(patients, many=True)
    #    return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def patient_detail(request, pk):
    patient = get_object_or_404(Patient, pk=pk)
    if request.method == 'GET':
        serializer = PatientSerializer(patient)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PatientSerializer(patient, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# VISITS


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_visits(request):
    visits = Visit.objects.all()
    serializer = VisitSerializer(visits, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_visits(request):
    if request.method == 'POST':
        serializer = VisitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def visit_detail(request, pk):
    visit = get_object_or_404(Visit, patient=pk)
    if request.method == 'GET':
        serializer = VisitSerializer(visit)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = VisitSerializer(visit, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        visit.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ADDRESS

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_addresses(request):
    addresses = Address.objects.all()
    serializer = AddressSerializer(addresses, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_addresses(request):
    if request.method == 'POST':
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def address_detail(request, pk):
    address = get_object_or_404(Address, patient = pk)
    if request.method == 'GET':
        serializer = AddressSerializer(address)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AddressSerializer(address, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        address.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# NOTES

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_notes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_notes(request):
    # note = get_object_or_404(Note, visit = pk)
    if request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def note_detail(request, pk):
    note = get_object_or_404(Note, visit = pk)
    if request.method == 'GET':
        serializer = NoteSerializer(note)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = NoteSerializer(note, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

# Summary_Of_Care

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_summaries(request):
    summaries = Summary_of_care.objects.all()
    serializer = SummaryOfCareSerializer(summaries, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_summaries(request):
    if request.method == 'POST':
        serializer = SummaryOfCareSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def summary_detail(request, pk):
    summary = get_object_or_404(Summary_of_care, pk=pk)
    if request.method == 'GET':
        serializer = SummaryOfCareSerializer(summary)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = SummaryOfCareSerializer(summary, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        summary.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)