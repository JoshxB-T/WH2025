import os
import json
import requests
import google.generativeai as genai
from django.http import JsonResponse
from django.http import HttpResponse, Http404
from django.views import View
from django.conf import settings


# Show client React
class ReactAppView(View):
    def get(self, request):
        try:
            # Manually set path to the build/index.html file
            index_path = settings.REACT_STATIC_PATH_2

            # Send React view to client
            with open(index_path) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            raise Http404("React build not found")


# Store client's task
class DataInputView(View):
    # Store client data
    def store_data(request):
        if request.method == 'POST':
            try:
                data = json.loads(request.body)

                # Print for now
                print("Received task:", data)

                return JsonResponse({'message': 'Task received successfully'}, status=200)
            except Exception as e:
                return JsonResponse({'error': str(e)}, status=400)

        return JsonResponse({'error': 'Invalid request method'}, status=405)


# Call Gemini API
def gemini_test_view(request):
    try:
        # Get Gemini API key
        genai.configure(api_key = settings.GEMINI_API_KEY)

        # Specify model
        model = genai.GenerativeModel("gemini-2.0-flash")

        # Prompt to generate a story based off task
        narrative = "Generate a narrative using the following list: "

        # Get response
        response = model.generate_content(narrative)

        return JsonResponse({"gemini_response": response.text})
    except Exception as e:
        return JsonResponse({"error": str(e)})
