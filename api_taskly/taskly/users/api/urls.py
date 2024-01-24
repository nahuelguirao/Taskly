from django.urls import path
from users.api.api import retrieveUserAPIView, ListCreateUserAPIView

urlpatterns = [
    path('', ListCreateUserAPIView.as_view(), name='list_create_user'),
    path('get/<int:pk>', retrieveUserAPIView.as_view(), name='retrieve_user')
]
