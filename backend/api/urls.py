from django.urls import path

from . import views

urlpatterns = [
    path('init', views.get_data)
]