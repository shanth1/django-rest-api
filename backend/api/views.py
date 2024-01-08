from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_connected_status(request):
    response_message = {"text": "You have successfully connected to AI chat"}
    return Response(response_message)

@api_view(['POST'])
def send_message(request):
    message = request.data.get('messages')[-1].get('text')
    return Response({"text": f"{message} + 1"})