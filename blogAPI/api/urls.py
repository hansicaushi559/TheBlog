from .views import * 
from django.urls import path

app_name = 'api'

urlpatterns = [
    path('', PostView.as_view(), name='postview'),
    path('post/<int:id>', PostDetailView.as_view(), name='postdetail'),
    path('search', PostSearch.as_view(), name='postsearch'),
    path('mypost', MyPostView.as_view(), name='mypost'),
    path('create', CreateView.as_view(), name='create'),
    path('edit/<int:pk>', EditView.as_view, name='edit'),
    path('delete/<int:pk>', DeleteView.as_view, name='delete'),
    path('mypost/<int:pk>', MyPostDetailView.as_view(), name='mypost-detail'),

]