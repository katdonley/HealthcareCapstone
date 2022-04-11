from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_providers),
    path('all/', views.get_all_providers),
]