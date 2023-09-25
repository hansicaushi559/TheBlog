from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, token_verify_view, CheckAuthenticationView


app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('check-auth/', CheckAuthenticationView.as_view(), name='check-authentication'),
    path('token/verify/', token_verify_view, name='token-verify'),
]