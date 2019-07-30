from django.db import models

class Post(models.Model):

    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='post_images')
    content = models.CharField(max_length=100)
    link = models.CharField(max_length=100)
    
    def __str__(self):
        return self.title