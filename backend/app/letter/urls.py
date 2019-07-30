from letter.views import LetterViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', LetterViewSet, basename='letter')
urlpatterns = router.urls