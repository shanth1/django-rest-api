from django.urls import path

from . import views

urlpatterns = [
    path('connect', views.get_connected_status),
    path('send', views.send_message)
]