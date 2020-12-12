from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework import viewsets

from .serializers import HeroSerializer, EchoSerializer
from .models import Hero, Echo


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('name')
    serializer_class = HeroSerializer

class EchoViewSet(viewsets.ModelViewSet):
    queryset = Echo.objects.all().order_by('message')
    serializer_class = EchoSerializer