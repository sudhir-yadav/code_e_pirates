
angular.module('starter', ['ionic', 'starter.controllers','validation.match','ngAnimate','ngCordova','ngSanitize'])

.run(function($ionicPlatform,$state,$ionicHistory,$cordovaDevice,$cordovaPush,$rootScope) {
  $ionicPlatform.ready(function() {

     var notifications = [];
    localStorage.setItem(app_prefix+'notification_data',JSON.stringify(notifications));

    var questions = [{"id":1,"priority":0,"question_text":"<p>#include &lt;stdio.h&gt;<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp;float f=0.0f;<br \/>&nbsp; &nbsp;int i;<br \/>&nbsp; &nbsp;for(i=0;i&lt;10;i++)<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; f = f + 0.1f;<br \/>&nbsp; &nbsp;}<br \/>&nbsp; &nbsp;i = (int)f;<br \/>&nbsp; &nbsp;if(i)<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; &nbsp; i++ &nbsp; + &nbsp; ++i;<br \/>&nbsp; &nbsp; &nbsp; &nbsp;printf('%d',i);<br \/>&nbsp; &nbsp;}<br \/>&nbsp; &nbsp; else<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; ++i - i--;<br \/>&nbsp; &nbsp; &nbsp; printf('%d',i);<br \/>&nbsp; &nbsp;}<br \/>&nbsp; return 0;<br \/>}<\/p>","qr_code":"00482784","attempt_status":0},{"id":2,"priority":0,"question_text":"<p>#include &lt;stdio.h&gt;<br \/>void fun(int key)<br \/>{<br \/>&nbsp; &nbsp; int answer = key%10;<br \/>&nbsp; &nbsp; printf('%d', answer);<br \/>}<br \/>void NuTech(float key)<br \/>{<br \/>&nbsp; &nbsp;int answer = (int)key;<br \/>&nbsp; &nbsp;printf('%d\n', answer);<br \/>}<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp;void (*NuTech)(int) = &amp;fun;<br \/>&nbsp; &nbsp;(*NuTech)(90990\/3791);<br \/>&nbsp; &nbsp;return 0;<br \/>}<\/p>","qr_code":"14850506","attempt_status":0},{"id":3,"priority":0,"question_text":"<p>#include&lt;stdio.h&gt;<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp; int num,r,sum,temp;<br \/>&nbsp; &nbsp;for(num=20;num&lt;=200;num++)<br \/>&nbsp; {<br \/>&nbsp; &nbsp; &nbsp;temp=num;<br \/>&nbsp; &nbsp; &nbsp;sum = 0;<br \/>&nbsp; &nbsp; &nbsp;while(temp!=0)<br \/>&nbsp; &nbsp; {<br \/>&nbsp; &nbsp; &nbsp; &nbsp;r=temp%10;<br \/>&nbsp; &nbsp; &nbsp; temp=temp\/10;<br \/>&nbsp; &nbsp; &nbsp; sum=sum+(r*r*r);<br \/>&nbsp; &nbsp; &nbsp;}<br \/>&nbsp; &nbsp; if(sum==num)<br \/>&nbsp; &nbsp; {<br \/>&nbsp; &nbsp; &nbsp; &nbsp;int ans = (num\/10)%10;<br \/>&nbsp; &nbsp; &nbsp; printf('%d',ans);<br \/>&nbsp; &nbsp; &nbsp;}<br \/>&nbsp; }<br \/>&nbsp; return 0;<br \/>}<\/p>","qr_code":"14942037","attempt_status":0},{"id":4,"priority":0,"question_text":"<p>#include&lt;stdio.h&gt;<br \/>#include&lt;conio.h&gt;<br \/>void main()<br \/>{<br \/>&nbsp; &nbsp; int gate1,gate2,MG;<br \/>&nbsp; &nbsp; int *nu;<br \/>&nbsp; &nbsp; gate1=78; gate2=518;<br \/>&nbsp; &nbsp; MG = fun1(gate1,gate2);<br \/>&nbsp; &nbsp; nu = &amp;MG;<br \/>&nbsp; &nbsp; printf('%d',*nu++);<br \/>}<br \/>int fun1(int gate3,int gate4)<br \/>{<br \/>&nbsp; &nbsp; double WelCome = gate4 \/gate3;<br \/>&nbsp; &nbsp; int Bye = WelCome;<br \/>&nbsp; &nbsp; return Bye;<br \/>}<\/p>","qr_code":"39154350","attempt_status":0},{"id":5,"priority":0,"question_text":"<p>#include &lt;stdio.h&gt;<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp;int i;<br \/>&nbsp; &nbsp;int arr[10] = {62,78,7,37,46,3,94,17,26,2};<br \/>&nbsp; &nbsp;for(i=1;i&lt;10;++i)<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; &nbsp;if(arr[0]&gt;arr[i])<br \/>&nbsp; &nbsp; &nbsp; &nbsp;arr[0]=arr[i];<br \/>&nbsp; &nbsp; }<br \/>&nbsp; &nbsp;int *nu;<br \/>&nbsp; &nbsp;nu = &amp;arr[0];<br \/>&nbsp; &nbsp;nu++;<br \/>&nbsp; &nbsp;++nu;<br \/>&nbsp; &nbsp; printf('%d',*nu);<br \/>&nbsp; &nbsp;return 0;<br \/>}<\/p>","qr_code":"48009632","attempt_status":0},{"id":6,"priority":0,"question_text":"<p>#include &lt;stdio.h&gt;<br \/> int NuTech(int u,int v)<\/p>\r\n<p>{<br \/>&nbsp; &nbsp;int t;<br \/>&nbsp; &nbsp;while(v &gt; 0)<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; if(u &gt; v)<br \/>&nbsp; &nbsp; &nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; t = u;<br \/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; u = v;<br \/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; v = t;<br \/>&nbsp; &nbsp; &nbsp; &nbsp; }<br \/>&nbsp; &nbsp; &nbsp; &nbsp;v = v-u;<br \/>&nbsp; &nbsp;}<br \/>&nbsp; return u;<br \/>}<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp; int x=112,y=104;<br \/>&nbsp; &nbsp; if(x &gt;0 &amp;&amp; y&gt;0)<br \/>&nbsp; &nbsp; printf('%d',NuTech(x,y));<br \/>&nbsp; &nbsp; return 0;<br \/>}<\/p>","qr_code":"61200031","attempt_status":0},{"id":7,"priority":0,"question_text":"<p>#include &lt;stdlib.h&gt;<br \/>#include &lt;stdio.h&gt;<br \/> void Error(char* s)<br \/> {<br \/>&nbsp; &nbsp;printf(s);<br \/>&nbsp; &nbsp;return;<br \/> }<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp;int *p;<br \/>&nbsp; &nbsp;p = malloc(sizeof(int));<br \/>&nbsp; &nbsp;if(p == NULL)<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; Error('Could not allocate the memory\n');<br \/>&nbsp; &nbsp; &nbsp; Error('Quitting....\n');<br \/>&nbsp; &nbsp; &nbsp;exit(1);<br \/>&nbsp; &nbsp;}<br \/>&nbsp; &nbsp;else<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; char NU = 'b';<br \/>&nbsp; &nbsp; &nbsp;int Tech = NU;<br \/>&nbsp; &nbsp; &nbsp;p = &amp;Tech;<br \/>&nbsp; &nbsp; &nbsp;printf('%d',*p\/10);<br \/>&nbsp; &nbsp;}<br \/>&nbsp; return 0;<br \/>}<\/p>","qr_code":"70892362","attempt_status":0},{"id":8,"priority":0,"question_text":"<p>#include&lt;stdio.h&gt;<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp; int a=0;<br \/>&nbsp; &nbsp; int b=10;<br \/>&nbsp; &nbsp; switch(a)<br \/>&nbsp; &nbsp; {<br \/>&nbsp; &nbsp; &nbsp; &nbsp; b+=2;<br \/>&nbsp; &nbsp; &nbsp; &nbsp;case 1: printf('%d',b);<br \/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;<\/p>\r\n<p>&nbsp; &nbsp; &nbsp; &nbsp;b++;<br \/>&nbsp; &nbsp; &nbsp; default:printf('%d',b);<br \/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;<br \/>&nbsp; &nbsp;}<br \/>&nbsp; &nbsp;return 0;<br \/>}<\/p>","qr_code":"80673979","attempt_status":0},{"id":9,"priority":0,"question_text":"<p>#include&lt;stdio.h&gt;<br \/>enum {false,true};<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp;int i=0;<br \/>&nbsp; &nbsp;do<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp;++i + ++i;<br \/>&nbsp; &nbsp; &nbsp; printf('%d\n',i);<br \/>&nbsp; &nbsp; &nbsp; i++;<br \/>&nbsp; &nbsp; &nbsp; if(i &lt; 6)<br \/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; continue;<br \/>&nbsp; &nbsp; }while(false);<br \/>&nbsp; &nbsp;return 0;<br \/>}<\/p>","qr_code":"92676833","attempt_status":0}];
    var triumph_card = {"id":10,"priority":1,"question_text":"<p>#include &lt;stdio.h&gt;<br \/>#include &lt;math.h&gt;<br \/>int NU(int n);<br \/>int TECH(int n);<br \/>int main()<br \/>{<br \/>&nbsp; &nbsp;int n = 96;<br \/>&nbsp; &nbsp;n = ++n &nbsp; + &nbsp; n++ &nbsp; - &nbsp; --n;<br \/>&nbsp; char c = (char)n;<br \/>&nbsp; if (c =='a' )<br \/>&nbsp; {<br \/>&nbsp; &nbsp; &nbsp; printf('%d',TECH(25));<br \/>&nbsp; }<br \/>&nbsp; if (c =='c')<br \/>&nbsp; {<br \/>&nbsp; &nbsp; &nbsp;printf('%d', NU(91));<br \/>&nbsp; }<br \/>&nbsp; &nbsp;return 0;<\/p>\r\n<p>}<br \/>int NU(int n)<br \/>{<br \/>&nbsp; &nbsp;int rem, i=1, k=0;<br \/>&nbsp; while (n!=0)<br \/>&nbsp; {<br \/>&nbsp; &nbsp; &nbsp;rem=n%8;<br \/>&nbsp; &nbsp; &nbsp;n\/=8;<br \/>&nbsp; &nbsp; &nbsp;k+=rem*i;<br \/>&nbsp; &nbsp; &nbsp;i*=10;<br \/>&nbsp; }<br \/>&nbsp;return k\/100;<br \/>}<br \/>int TECH(int n)<br \/>{<br \/>&nbsp; &nbsp;int d=0, i=0, rem;<br \/>&nbsp; &nbsp;while (n!=0)<br \/>&nbsp; &nbsp;{<br \/>&nbsp; &nbsp; &nbsp; rem = n%10;<br \/>&nbsp; &nbsp; &nbsp; n\/=10;<br \/>&nbsp; &nbsp; &nbsp; d += rem*pow(8,i);<br \/>&nbsp; &nbsp; &nbsp; ++i;<br \/>&nbsp; &nbsp;}<br \/>&nbsp;return d;<br \/>}<\/p>","qr_code":"96271309","attempt_status":0};

     if (localStorage.getItem(app_prefix+'triumph_ques') === null) {
       localStorage.setItem(app_prefix+'triumph_ques',JSON.stringify(triumph_card));
     }

     if (localStorage.getItem(app_prefix+'questions') === null) {
          localStorage.setItem(app_prefix+'questions',JSON.stringify(questions));
     }

     if (localStorage.getItem(app_prefix+'ques_no') === null) {
          localStorage.setItem(app_prefix+'ques_no',0);
     }

     if (localStorage.getItem(app_prefix+'test_completed') === null) {
          localStorage.setItem(app_prefix+'test_completed',0);
     }



     if(localStorage.getItem(app_prefix+'test_completed') == 1)
     {
         $('#ans_btn').hide();
        $('#success').show();
     }




    if (window.cordova && window.cordova.plugins.Keyboard) {cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);}
    if (window.StatusBar) {StatusBar.styleDefault();}

  });



  $ionicPlatform.registerBackButtonAction(function ($ionicHistory) {

  var  m = $state.current.name;
   // alert(m);
   
   if(m == 'app.index' || m == 'startup')
   {
       navigator.app.exitApp();
   }
   else
   {
       window.history.back();
   }

  
   if(localStorage.getItem(app_prefix+'current_page'))
   { 
      var tst_sess = localStorage.getItem(app_prefix+'test_session');
      var crr_pg = localStorage.getItem(app_prefix+'current_page');
       
       if(tst_sess == 1 && crr_pg == "test_pg")
       {
            // var txt;
              var r = confirm("Are you sure you want to exit test ..?");
              if (r == true) {
                  localStorage.setItem(app_prefix+'current_page',"dashboard_pg");
                  $state.go('app.index');
              } else { return true; }
       }

   }

    }, 100);



})


.config(function($stateProvider, $urlRouterProvider ,$cordovaAppRateProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'menuCtrl'
  })

  .state('app.index', {
    cache: false,
    url: "/user_dashboard",
    views: {
      'menuContent': {
        templateUrl: "templates/user_dashboard.html",
        controller:"dashboardCtrl"
      }
    }
  })


.state('app.sudhir', {
    cache: false,
    url: "/sudhir",
    views: {
      'menuContent': {
        templateUrl: "templates/sudhir.html",
        controller:"boardCtrl"
      }
    }
  })


  .state('startup', {
    url: "/startup",
    templateUrl: "templates/startup.html",
     controller: 'StarupCtrl'
  });




  if (localStorage.getItem(app_prefix+"login_status") === null) {
     $urlRouterProvider.otherwise('/startup');
   }
   else if(localStorage.getItem(app_prefix+"login_status") == 1)
   {
     $urlRouterProvider.otherwise('app/user_dashboard');
   }
   else
   {
     $urlRouterProvider.otherwise('/startup');
   }
    
    
   // $urlRouterProvider.otherwise('app/user_dashboard');



});
