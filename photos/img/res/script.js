$(document).ready(function(){
    $('#signupform').validate({
      rules:{
        emailAddress:{
          required:true,
          email:true,
          minlength:4
        },
        passwordone:{
          required:true,
          minlength: 6
        },
        Address:{
          required:true,
          minlength: 6
        },
        City:{
          required:true,
        },
        State:{
          required:true,
        },
        Zip:{
          required:true,
        }
  
      },
      messages:{
        email:{
          required:"Enter the correct email",
          minlenght:"Enter atleast 4 characters"
        },
        passwordone:{
          required:"Please enter a password",
          minlenght:"Enter atleast 6 characters"
        },
        Address:{
          required:"Enter the address",
          minlength:"Min 6 characters required"
        },
        City:{
          required:"Enter the city",
        },
        State:{
          required:"Enter the city",
        },
        Zip:{
          required:"Enter the Zipcode",
        }
      }
    })
  })