from django.urls import path
from . import views

urlpatterns = [
    path('api/tasks/', views.task_list),
    path('api/tasks/complete/<int:task_id>/', views.complete_task),
]
