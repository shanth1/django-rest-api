from django.db import models

class Chat(models.Model):
    message = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.message
