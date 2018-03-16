
angular.module('starter.controllers', [])

.controller('menuCtrl', function($scope,$ionicLoading,$state,$ionicSideMenuDelegate,$cordovaAppRate,$cordovaSocialSharing,$cordovaGoogleAnalytics) { 
    
     $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
    };

     $scope.logOut = function (){
     // alert();
                  localStorage.setItem(app_prefix+'login_status',"0");
                  $state.go('startup');
     }

})

.controller('dashboardCtrl', function($scope,$sanitize,$ionicLoading,$state,$ionicPopup,$timeout,$interval,$rootScope,$ionicPlatform,$cordovaBarcodeScanner) { 
    

   $scope.quesNo = parseInt(localStorage.getItem(app_prefix+'ques_no'));
   
    var max_time = 9000;
    $scope.timer =  $interval(function ()
             { 
                if(max_time >= 0)
                  {
                    $scope.timerTime = formatSeconds(max_time);
                    //$('#timer_id').html($scope.timerTime);
                    max_time--;  
                  }
                  else
                  { 
                     $scope.stopFight = $interval.cancel($scope.timer);
                     //console.log($scope.timerTime);  
                  }
     },1000);
    
    
 var formatSeconds = function(secs)
 {
    console.log(secs);
    var h = Math.floor(secs / 3600);
    var m = Math.floor((secs / 3600) % 01 * 60);  // Remainder of an hour of seconds x 60
    var s = Math.floor((secs / 60) % 01 * 60);    // Remainder of a minute of seconds x 60
    return pad(h) +":"+ pad(m) +":"+ pad(s);
 }; 

 var pad = function(n) { return (n < 10 ? "0"+n : n);};
   

   $scope.getQuestion = function()
    {
       var raw_questions = localStorage.getItem(app_prefix+'questions');
       var questions =  JSON.parse(raw_questions);
       var arr_size = questions.length;
       var rand_num = Math.floor(Math.random()*arr_size);

       var m12 = $scope.quesNo;
       localStorage.setItem(app_prefix+'ques_no',m12);
       $scope.quesNo += 1;
  
       if($scope.quesNo == 10)
       {
         var triumph_quest = localStorage.getItem(app_prefix+'triumph_ques');
         var tquestions =  JSON.parse(triumph_quest);
         $scope.quesNo = 10;
         $scope.currentQuestion = tquestions.question_text;
       }
       else if($scope.quesNo > 10)
       {
          $scope.quesNo = 10;
         $('#ans_btn').hide();
       }
       else
      {
        $scope.currentQuestion = questions[rand_num].question_text;
        localStorage.setItem(app_prefix+'question_id',rand_num); 
       }
    }
    

    
   $scope.gotAns = function()
   {
             var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
             var mn = localStorage.getItem(app_prefix+"question_id");
             var raw_questions = localStorage.getItem(app_prefix+'questions');
             var questions =  JSON.parse(raw_questions);

                if ( app )
                {
                  $cordovaBarcodeScanner.scan().then(function(imageData) 
                   {
                     console.log(imageData.format);
                         if(imageData.format == 'QR_CODE')
                         {
                            console.log($scope.quesNo);
                           
                           if($scope.quesNo == 10)
                           {

                               var triumph_quest = localStorage.getItem(app_prefix+'triumph_ques');
                               var tquestions =  JSON.parse(triumph_quest);

                               if(tquestions.qr_code == imageData.text)
                               {
                                 localStorage.setItem(app_prefix+'test_completed',1);
                                 localStorage.setItem(app_prefix+'triumph_ques','[]');
                                  $('#ans_btn').hide();
                                  $('#success').show();
                               }
                               else
                               {
                                  alert("Invalid code , Please try another code ");
                               }

                           }
                            else
                           {
                                 var mn = localStorage.getItem(app_prefix+"question_id");
                                 var raw_questions = localStorage.getItem(app_prefix+'questions');
                                 var questions =  JSON.parse(raw_questions);
                                 var ques_qr = questions[mn].qr_code;

                                 //console.log(imageData.txt+""+questions[mn].qr_code);

                                 if(imageData.text == ques_qr)
                                  {
                                     alert("Correct answer .!!"); 
                                     questions.splice(mn, 1);
                                     localStorage.setItem(app_prefix+'questions',JSON.stringify(questions));
                                     $scope.getQuestion();
                                  }
                                  else{alert("Invalid code , Please try another code "); }
                           }

                         }else{
                             alert(" Invalid text ");
                         }


                    }, function(error) {
                        alert("Undefined error ");
                    });
                } else {/*$state.go('app.index');*/

                  questions.splice(mn, 1);
                                 localStorage.setItem(app_prefix+'questions',JSON.stringify(questions));
                                 $scope.getQuestion();


              }   
   };




 
    

 
})



.controller('notificationCtrl', function($scope, $ionicModal, $timeout,$ionicLoading,$state,$cordovaGoogleAnalytics) {

  if(typeof analytics != "undefined"){ $cordovaGoogleAnalytics.trackView('Notification_page'); }
  
   $scope.notifications= $.makeArray(JSON.parse(localStorage.getItem(app_prefix+'notification_data')));
    

})



.controller('StarupCtrl', function($scope, $ionicModal, $timeout,$ionicLoading,$state,$cordovaBarcodeScanner) 
{
          $scope.scanBarcode = function() 
          {   
              var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
                if ( app )
                {
                     $cordovaBarcodeScanner.scan().then(function(imageData) 
                     {
                      if(imageData.text == 'NU_CODE_E_PIRATES_MCA_24216')
                        {
                            localStorage.setItem(app_prefix+"login_status",'1');
                            $state.go('app.index');
                        }else{alert("Please try again "); }
                                           
                    }, function(error) {
                        alert("Undefined error ");
                    });
                } else {
                    $state.go('app.index');
                }       
           };
});




