from django.shortcuts import render, HttpResponse
from rest_framework.decorators import  api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

# Creating views here.

@api_view(['GET'])
def task_list(request):
    tasks = Task.objects.filter(user = request.user)
    serializer = TaskSerializer(tasks, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def complete_task(request, task_id):
    try:
        task = Task.objects.get(id = task_id, user = request.user)
        task.completed = True
        task.save()
        return Response({'status': 'completed'})
    except Task.DoesNotExist:
        return Response({'error': 'Task not found'}, status = 404)

def home(request):
    return render(request, "home.html")
