from django.urls import path

from crops.views import AllCropsView

urlpatterns = [
    path('crops/', AllCropsView.as_view(), name='all-crops')
]
