from django.contrib import admin
from django.urls import path, include
from users.views import Login

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', Login.as_view(), name='login'),
    path('', include('tasks.api.urls')),
    path('', include('users.api.routers'))
]
