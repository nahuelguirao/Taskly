from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('last_login', 'is_superuser','is_active','is_staff', 'groups', 'user_permissions')