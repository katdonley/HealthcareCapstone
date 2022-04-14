from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_patients),
    path('all/', views.get_all_patients),
    path('<int:pk>/', views.patient_detail),
    path('visits/', views.user_visits),
    path('all/visits/', views.get_all_visits),
    path('get/<int:pk>/', views.visit_detail),
]