from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def get_data(request):
    init = {"message": "You have successfully connected to AI chat"}
    return Response(init)