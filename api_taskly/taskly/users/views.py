from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from users.api.serializer import UserLoginSerializer

class Login(ObtainAuthToken):
    
    def post(self, request):
        login_serializer = self.serializer_class(data=request.data)
        
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']
            
            created = Token.objects.get_or_create(user = user)
            user_serializer = UserLoginSerializer(user)
            
            if created: 
                return Response({
                    'user': user_serializer.data,
                    'message': 'Loged in.'
                }, status.HTTP_200_OK)
            
            else:
                return Response({'message':'User has already an open session.'})
        else:
            return Response({'error':'Invalid credentials.'}, status.HTTP_400_BAD_REQUEST)