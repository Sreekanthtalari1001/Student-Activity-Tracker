from django.urls import path
from . import views
urlpatterns = [
    path('', views.HomePageView.as_view(), name='main'),
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/login/', views.login_view, name='logout'),
    path('home/', views.home_view, name='home'),
    path('home/profile/', views.profile_view, name='profile'),
    path('home/test/', views.test_view, name='test'),
    path('home/test/test1/', views.test1_view, name='test1'),
    path('home/test/test2/', views.test2_view, name='test2'),
    path('home/test/test3/', views.test3_view, name='test3'),
    path('home/dashboard/', views.dashboard_view, name='dashboard'),
    path('home/course/', views.course_view, name='course'),
   
    path('logout/',views.user_logout,name='logout'),
]