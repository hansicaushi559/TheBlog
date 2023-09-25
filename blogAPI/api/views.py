from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters

class PostView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated ,]
    serializer_class = PostSerializer
    queryset = Post.postobjects.all()


class PostDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated ,]
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'id'


class PostSearch(generics.ListAPIView):
    permission_classes = [IsAuthenticated, ]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^title']


class MyPostView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author = user)
    
class CreateView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class EditView(generics.UpdateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class MyPostDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DeleteView(generics.DestroyAPIView):
    pagination_class = [IsAuthenticated]
    serializer_class = PostSerializer
    queryset = Post.objects.all()