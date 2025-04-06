from django.db import models
from django.contrib.auth.models import User

# Creating models here.

class Task(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    title = models.CharField(max_length = 200)
    description = models.TextField(blank = True)
    completed = models.BooleanField(default = False)
    due_date = models.DateField(null = True, blank = True)
    reward_text = models.CharField(max_length = 255, default = "You earned a reward!")

    def __str__(self):
        return f"{self.title} ({'✅' if self.completed else '❌'})"


class StoryNode(models.Model):
    title = models.CharField(max_length = 200)
    narrative = models.TextField()
    required_task = models.ForeignKey(Task, on_delete = models.SET_NULL, null = True, blank = True)
    unlocks_on_completion = models.BooleanField(default = False)

    def __str__(self):
        return self.title


class Choice(models.Model):
    from_node = models.ForeignKey(StoryNode, related_name = 'choices_from', on_delete = models.CASCADE)
    to_node = models.ForeignKey(StoryNode, related_name = 'choices_to', on_delete = models.CASCADE)
    label = models.CharField(max_length = 200)

    def __str__(self):
        return f"{self.label} ({self.from_node.title} ➡️ {self.to_node.title})"


class UserProgress(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    current_node = models.ForeignKey(StoryNode, on_delete = models.SET_NULL, null = True)

    def __str__(self):
        return f"{self.user.username} at '{self.current_node}'"
