from rest_framework import generics
from .models import userResponse
from .serializers import FormDataSerializer

class FormDataCreateView(generics.CreateAPIView):
    queryset = userResponse.objects.all()
    serializer_class = FormDataSerializer
