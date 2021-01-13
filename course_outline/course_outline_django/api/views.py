from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework import viewsets

from .serializers import *
from .models import *


# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all().order_by('code')
#     serializer_class = CourseSerializer

class CourseOutlineViewSet(viewsets.ModelViewSet):
    queryset = CourseOutline.objects.all().order_by('name')
    serializer_class = CourseOutlineSerializer

class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all().order_by('first_name')
    serializer_class = InstructorSerializer

# class SectionViewSet(viewsets.ModelViewSet):
#     queryset = Section.objects.all().order_by('message')
#     serializer_class = SectionSerializer

# class ComponentViewSet(viewsets.ModelViewSet):
#     queryset = Component.objects.all().order_by('message')
#     serializer_class = ComponentSerializer

# class TAViewSet(viewsets.ModelViewSet):
#     queryset = TA.objects.all().order_by('message')
#     serializer_class = TASerializer

# class GradeViewSet(viewsets.ModelViewSet):
#     queryset = Grade.objects.all().order_by('message')
#     serializer_class = GradeSerializer

# class TextBookViewSet(viewsets.ModelViewSet):
#     queryset = TextBook.objects.all().order_by('message')
#     serializer_class = TextBookSerializer

# class CourseOutcomeViewSet(viewsets.ModelViewSet):
#     queryset = CourseOutcome.objects.all().order_by('message')
#     serializer_class = CourseOutcomeSerializer
