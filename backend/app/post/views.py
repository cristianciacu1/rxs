from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Post
from .serializers import PostSerializer

class ArticleListView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailListView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
