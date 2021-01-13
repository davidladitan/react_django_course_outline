# serializers.py
from rest_framework import serializers

from .models import *

class CourseOutlineSerializer(serializers.HyperlinkedModelSerializer):
    # instructor = serializers.StringRelatedField()
    # owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = CourseOutline
        # fields = ('name','prepared_by','date_created','date_modified','course_code','course_title', 'course_description','credits','calendar_ref', 'instructor')
        fields = '__all__'
        depth = 1


class InstructorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Instructor
        fields = ('url','id','first_name','last_name','phone','office','email')

class SectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Section
        fields = ('name','day_of_week','start_time','end_time','location')

class ComponentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Component
        fields = ('name','outcomes_evaluated','weight','course')

class TASerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TA
        fields = ('first_name','last_name','phone','office','email','course')

class GradeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Grade
        fields = ('letter_grade','lower','upper','course')

class TextBookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = TextBook
        fields = ('title','publisher','year','edition','recommended','course')

class BookAuthorsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BookAuthors
        fields = ('textbook','author_name')

class CourseOutcomeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = CourseOutcome
        fields = ('course','outcome')