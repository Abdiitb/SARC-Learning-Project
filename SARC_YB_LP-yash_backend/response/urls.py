from django.urls import path
from .views import FormDataCreateView

urlpatterns = [
    path('api/formdata/', FormDataCreateView.as_view(), name='formdata-create'),
]