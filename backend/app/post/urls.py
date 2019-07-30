from django.urls import path, include
from .views import ArticleListView, DetailListView

urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<pk>', DetailListView.as_view()),
]