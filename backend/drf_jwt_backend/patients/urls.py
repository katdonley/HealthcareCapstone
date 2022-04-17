from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_patients),
    path('all/', views.get_all_patients),
    path('<int:pk>/', views.patient_detail),

    path('visits/', views.user_visits),
    path('all/visits/', views.get_all_visits),
    path('get/<int:pk>/', views.visit_detail),

    path('addresses/', views.user_addresses),
    path('all/addresses/', views.get_all_addresses),
    path('getaddress/<int:pk>/', views.address_detail),

    path('notes/', views.user_notes),
    path('all/notes/', views.get_all_notes),
    path('getnote/<int:pk>/', views.note_detail),

    path('summaries/', views.user_summaries),
    path('all/summaries/', views.get_all_summaries),
    path('getsummary/<int:pk>/', views.summary_detail),
]