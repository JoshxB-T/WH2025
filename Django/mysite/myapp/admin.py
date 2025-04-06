from django.contrib import admin
from .models import Task, StoryNode, Choice, UserProgress

# Registering models here.

admin.site.register(Task)
admin.site.register(StoryNode)
admin.site.register(Choice)
admin.site.register(UserProgress)