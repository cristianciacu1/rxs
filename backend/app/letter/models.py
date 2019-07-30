from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Letter(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=150)
    message = models.TextField()

    def __str__(self):
        return self.name