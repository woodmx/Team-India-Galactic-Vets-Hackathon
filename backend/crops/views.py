from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from crops.models import Crop
from .serializers import CropSerializer


class AllCropsView(APIView):
    def get(self, request):
        crops = Crop.objects.all()
        serializer = CropSerializer(crops, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
