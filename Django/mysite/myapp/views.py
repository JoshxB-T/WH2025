import os
import json
import requests
from django.http import JsonResponse
from django.http import HttpResponse, Http404
from django.views import View
from django.conf import settings

# Show client React
class ReactAppView(View):
    def get(self, request):
        try:
            # Manually set path to the build/index.html file
            index_path = r'C:\Users\josht\OneDrive\Desktop\World\WildHacks2025\WH2025\daily_quests\build\index.html'

            # print("Looking for React index at:", index_path)  # FIXME: Delete after debugging

            # Send React view to client
            with open(index_path) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            raise Http404("React build not found")

# Store client data
class DataInputView(View):
    def post(self, request):
        try:
            # Save data from request
            data = json.loads(request.body)

            # Extract user's input
            user_input = data.get('user_input')
            
            # Create a JSON file of received info
            response_data = {
                'message': 'Data received successfully',
                'input_received': user_input
            }

            return JsonResponse(response_data, status=200)
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON'}, status=400)

# Make call to Gemini
class GoogleGeminiView(View):
    def post(self, request):
        # JSON file creation to prompt Gemini
        input_data = {
            "Greeting": "Say hello, Gemini"
        }

        # URL to specific model        
        api_url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'
        
        # Generated key
        api_key = 'AIzaSyABRINsBRYZB_bHtpDYj-QYempdLmjMNmE'

        # Request headers        
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}',
        }

        # Create prompt for Gemini
        response = requests.post(api_url, json=input_data, headers=headers)

        if response.status_code == 200:
            # Request is successful
            response_data = response.json()
            return JsonResponse(response_data, status=200)
        else:
            # Request fails
            return JsonResponse({"error": "Failed to interact with Gemini"}, status=500)
