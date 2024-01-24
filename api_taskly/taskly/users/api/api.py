from rest_framework import generics, status
from users.api.serializer import UserSerializer
from users.models import User

class ListCreateUserAPIView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    
    def get_queryset(self):
        return User.objects.all()

class retrieveUserAPIView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    
    def get_queryset(self):
        pk = self.kwargs['pk']
        return User.objects.filter(pk=pk)
