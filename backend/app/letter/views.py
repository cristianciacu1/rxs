from rest_framework import viewsets

from .models import Letter
from .serializers import LetterSerializer

class LetterViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = LetterSerializer
    queryset = Letter.objects.all()
