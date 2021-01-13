from django.db import models
from django.utils import timezone

# Create your models here.



class Instructor(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=20)
    office = models.CharField(max_length=10)
    email = models.CharField(max_length=30)

    def __str__(self):
        return self.first_name 


class CourseOutline(models.Model):
    name = models.CharField(max_length = 30, blank = False, null =False)
    prepared_by = models.CharField(max_length=30)
    date_created = models.DateTimeField()
    date_modified = models.DateTimeField()
    course_code = models.CharField(max_length=10)
    course_title = models.CharField(max_length=30)
    course_description = models.TextField()
    credits = models.IntegerField()
    calendar_ref = models.URLField()
    instructor = models.ForeignKey(Instructor, null = True, on_delete= models.SET_NULL)
   
    # owner = models.ForeignKey('auth.User', related_name='CourseOutlines', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(CourseOutline, self).save(*args, **kwargs)


class Section(models.Model):
    name = models.CharField(max_length=10)
    day_of_week = models.CharField(max_length=10)
    start_time = models.TimeField()
    end_time = models.TimeField()
    location =  models.CharField(max_length=30)


class Component(models.Model):
    name = models.CharField(max_length=30)
    outcomes_evaluated = models.CharField(max_length=10)
    weight = models.IntegerField()
    courseOutline = models.ForeignKey(CourseOutline, on_delete= models.CASCADE)

    def __str__(self):
        return self.name 

    

class TA(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    office = models.CharField(max_length=10)
    email = models.CharField(max_length=30)
    courseOutline = models.ManyToManyField(CourseOutline)

    def __str__(self):
        return self.first_name

class Grade(models.Model):   
    letter_grade = models.CharField(max_length = 2)
    lower = models.IntegerField()
    upper = models.IntegerField()
    courseOutline = models.ManyToManyField(CourseOutline)

    def __str__(self):
        return self.letter_grade

class TextBook(models.Model): 
    title = models.CharField(max_length = 40)
    publisher = models.CharField(max_length = 30)
    year = models.IntegerField()
    edition = models.CharField(max_length = 30)
    recommended = models.BooleanField()
    courseOutline = models.ManyToManyField(CourseOutline)

    def __str__(self):
        return self.title

class BookAuthors(models.Model):
    textbook = models.ForeignKey(TextBook, on_delete = models.CASCADE)
    author_name = models.CharField(max_length = 30)

    def __str__(self):
        return self.author_name

class CourseOutcome(models.Model):
    courseOutline = models.ForeignKey(CourseOutline, on_delete = models.CASCADE)
    outcome = models.TextField()

    def __str__(self):
        return self.outcome
