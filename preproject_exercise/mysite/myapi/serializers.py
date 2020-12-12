# serializers.py
from rest_framework import serializers

from .models import Hero, Echo

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Hero
        fields = ('name', 'alias')

class EchoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Echo
        fields = ('id','message')