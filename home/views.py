from django.shortcuts import render,HttpResponse

def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def search(request):
    return render(request,'search.html')

def signup(request):
    return render(request,'signup.html')

def aftersignup(request):
    return render(request,'aftersignup.html')

def login(request):
    return render(request,'login.html')
# Create your views here.
