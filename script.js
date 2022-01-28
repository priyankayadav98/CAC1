var span=document.getElementsByTagName("span");
    
    
    function validate()
                 { 
                   
         var check1 =  document.getElementById("name").value;
        
        
         var check2 = document.getElementById("email").value;
        
         var check3 =document.getElementById("phone").value;
         
         var check5 = document.getElementById("add").value;
        
         var check4 = document.getElementById("pass").value;
        
        
    
        if((check1 == null || check1 == "") && (check2 == null || check2 == "") && (check3== null || check3 == "") && (check4 == null || check4 == "") && (check5== "" || check5 == null))
       {             
        
    
        span[0].innerText="Blank name";
        document.getElementById("name").style.border="0.5px red solid";
        span[1].innerText="Blank phone number";
        document.getElementById("phone").style.border="0.5px red solid";
        span[2].innerText="Blank address";
        document.getElementById("add").style.border="0.5px red solid";
        span[3].innerText="Blank email";
        document.getElementById("email").style.border="0.5px red solid";
        span[4].innerText="Blank password";
        document.getElementById("pass").style.border="0.5px red solid";
        scrollToTop()
        
        
        return false;   
        
    
         }
    else{
    allLetter();
    check_Email();
    
    check_password();
   check_Phone();
   display(); 
       
    }}
    
              
function check_Email() {
                        
                        var user = document.getElementById("email").value;
                        var user2 = document.getElementById("email");
                        var re = /^\w+([\.-]?\w+)*@christuniversity.in/;
                        
                      
                        if (user == "") {
                        span[3].innerText="Blank email";
                        user2.style.border="2.5px red solid";
                  
                        return false;
                        }
                    
            
                        if (re.test(user)) {
                            span[3].innerText = 'Valid';
                            
                            user2.style.border="1px green solid";
                
    
    
                            return true;
                         
                            
                        }
                        else {
    
                            span[3].innerText="Incorrect Email id";
                         user2.style.border="1px red solid";
                           return false;
                             }
                    }
            
            
function check_Phone() {
             
        var user = document.getElementById("phone").value;
        var user2 = document.getElementById("phone");
        var re = /^[6-9]\d{9}$/;
    
    
        if (user == "") {
                      
                        
                        span[1].innerText="Blank phone number";
                        user2.style.border="2px red solid";
                        
                        return false;
                       
                        } 
              if (re.test(user) & user.length == 10) 
              {
                span[1].innerText = 'Valid';
                            
                 user2.style.border="1.5px green solid";
                
                  check_address();
                  return true;
                }
    
                
              else {
            
                  user2.style.border = "red solid 0.5px";
                  span[1].innerText="Phone no should be of 10 digits";
                  
                  return false;
              } }
    
function allLetter()
        {
        var user = document.getElementById("name").value;
        var user2 = document.getElementById("name");
        var re = /^[a-zA-Z ]*$/;
        
        if (user == "") {span[0].innerText="Blank name";
                        user2.style.border="0.5px red solid";
                       
                        return false;
                        } 
        if (re.test(user) ) {
            span[0].innerText = 'Valid';
                            
                            user2.style.border="1.5px green solid";
                return true;
                check_Phone();
               
            }
        else {    
                  user2.style.border = "red solid 0.5px";
                  span[0].innerText="Name should contain only alphabets";
                  return false;
                
            }
    
           
           }
        
        
function check_password()
     { 
        var user = document.getElementById("pass").value;
        var user2 = document.getElementById("pass");
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
         if (user == "")
         {

            span[4].innerText="Blank password";
            user2.style.border="0.5px red solid";
            return false;
                        } 
        else if (re.test(user))
         {   

              if(  user.trim().length < 8 && user != "" )

              {
            span[4].innerText = 'Weak Password';
            user2.style.border="1.5px green solid";
              }

              
             
            else if (user.trim().length >= 8 && user.trim().length <=15) {
            span[4].innerText = 'Strong Password';
            user2.style.border="5px green solid";
            return true;
            }
            else{
            span[4].innerText = 'Too long Password';
            
            } }
         else {
          
                 user2.style.border = "red solid 2px";
                 span[4].innerText="Invalid password";
                 user2.style.border="1.5px red solid";
                 return false;
             } 
 }
    

function display()
    {
        if (validate()=="true" &&   check_Phone()=="true" && check_password()=="true" && check_Email()=="true" && check_address =="true"())
    {
    alert("YOU HAVE REGISTERED");
    }
    
    else
      return false;
    }
          
    function scrollToTop() {
    window.scrollTo(4, 0);
}
          
      

function test(event)
{
    let code=event.which;
    if(code>47&&code<58)
   
    return false;
    else
    return true;
    
}
function test2(event)
{
    let code=event.which;
    if(code>64&&code<91)
   
    return false;
    else
    return true;
    
}


function check_address()
{ var user = document.getElementById("add").value;
  var user2 = document.getElementById("add");
  if(user.value.trim()=="")
  {
      alert("Blank Address");
      user2.style.border="solid 3px red";
      return false;
  }
  else{
       user2.style.border="solid 5px green";
       check_Email();
  }


}



