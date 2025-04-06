from rest_framework import serializers
from .models import Task, StoryNode, Choice, UserProgress

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class StoryNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoryNode
        fields = '__all__'


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = '__all__'


class UserProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgress
        fields = '__all__'
