from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_patients),
    path('all/', views.get_all_patients),
]