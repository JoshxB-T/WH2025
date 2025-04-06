from django.urls import path
from .views import ReactAppView, DataInputView

urlpatterns = [
    path('', ReactAppView.as_view(), name = 'react_app'),
    path('api/submit/', DataInputView.as_view(), name='submit_data'),
]