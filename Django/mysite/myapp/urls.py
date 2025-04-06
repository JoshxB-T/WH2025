from django.urls import path
from .views import ReactAppView, DataInputView, gemini_test_view

urlpatterns = [
    path('', ReactAppView.as_view(), name = 'react_app'),
    path('test-gemini/', gemini_test_view, name='test_gemini'),
]