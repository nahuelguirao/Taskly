from rest_framework import status
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from users.api.serializer import UserSignInSerializer

class UsersSignInViewSet(ViewSet):
    serializer_class = UserSignInSerializer
    
    def create(self, request):
        new_user = self.serializer_class(data = request.data)
        
        if new_user.is_valid():
            new_user.save()
            return Response({'message':'User created succesfully.',
                             'user': new_user.data
                             }, status.HTTP_201_CREATED)
        
        return Response({'error':new_user.errors}, status.HTTP_400_BAD_REQUEST)