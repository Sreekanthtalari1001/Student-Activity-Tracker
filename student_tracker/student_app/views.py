#from django.shortcuts import render

# Create your views here.
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect
from django.contrib.auth import login
#from django.http import HttpResponse
from .decorator import authenticate_user
from django.views.generic import TemplateView
from django.contrib.auth import logout as logouts
from django.contrib import messages

def register_view(request):
    if request.method == 'POST':
        register_form = UserCreationForm(request.POST)
        if register_form.is_valid():
            register_form.save()
            return redirect('login')
    else:
        register_form = UserCreationForm()
    return render(request, 'register.html', {'register_form': register_form})

@authenticate_user
def login_view(request, user=None):
    login(request,user)
    return redirect('home')

class HomePageView(TemplateView):
    template_name = 'index.html'

def home_view(request):
    home_dict = dict(
        my = request.user.username,
        email = request.user.email
    )
    return render(request,"home.html",home_dict)

def profile_view(request):
    current_user = request.user
    user_username = current_user.username
    user_email = current_user.email
    user_id = current_user.id

    my_dict = dict(
        name = user_username,
        id = user_id,
        email = user_email
    )
    return render(request,'profile.html',my_dict)

def test_view(request):
    return render(request,'connect_test.html')

def test1_view(request):
    return render(request,'test.html')

def test2_view(request):
    return render(request,'test1.html')

def test3_view(request):
    return render(request,'test2.html')


def dashboard_view(request):
    return render(request,'dashboard.html',{'name':request.user.username})

def course_view(request):
    return render(request,'connected_course.html')

def user_logout(request):
    if request.method == 'POST':
        logouts(request)
        return redirect('/')
    