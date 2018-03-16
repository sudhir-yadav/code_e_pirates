  var email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  $("#registration").submit(function( event ) {
    
     var email = $("#email");
     var password = $("#password");
     var cpassword = $("#cpassword");

     if(email.val() == "" || password.val() == "" || cpassword.val() == "")
     {
       if(email.val() == "")
        {
          email.addClass('err_field');
          setTimeout(function () { 
            email.removeClass('err_field');
           }, 2500);
         }
   

       if(password.val() == ""){
        password.addClass('err_field');
        setTimeout(function () { 
            password.removeClass('err_field');
           }, 2500);
        }

       if(cpassword.val() == ""){
        cpassword.addClass('err_field');
        setTimeout(function () { 
            cpassword.removeClass('err_field');
           }, 2500);
        }

     }
    else if(email_regex.test(email.val()) == false)
    {
       email.addClass('err_field');
       $('#email_err').html('<br/>Invalid email ');
          setTimeout(function () { 
            email.removeClass('err_field');
            $('#email_err').html("");
           }, 2500);
    }
    else if(password.val().length <= 4)
    {
        password.addClass('err_field');
       $('#pass_err').html('<br/>Password length should be greater than 4 characters ');
          setTimeout(function () { 
            password.removeClass('err_field');
            $('#pass_err').html("");
           }, 2500);
    }
    else if(password.val() != cpassword.val())
    {
          cpassword.addClass('err_field');
          $('#cpass_err').html('<br/>password did not match');
          setTimeout(function () { 
            cpassword.removeClass('err_field');
            $('#cpass_err').html("");
           }, 2500);
    }
     else
     {
       userRegistration(email.val(),password.val());
       $("#registration").reset();
     }

     event.preventDefault();
   });