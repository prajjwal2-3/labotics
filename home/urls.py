from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('',views.index,name="home"),
    path('about/',views.about,name="about"),
    path('search/',views.search,name="search"),
    path('signup/',views.signup,name="signup"),
    path('signup/aftersignup.html/',views.aftersignup,name="aftersignup")
]
