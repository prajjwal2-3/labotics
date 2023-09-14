from django.shortcuts import render,HttpResponse

def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def search(request):
    return render(request,'search.html')

# Create your views here.
