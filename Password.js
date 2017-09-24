/**
*	@file Password.js
*	@author Ryan Kass
*	@date 9/26/17
*	@brief functions for password
*/
function password(password1,password2)
{
  if(password1 == null || password1 == "" || password1.length < 8)
  {
    alert("Password needs to be at least 8 characters long.");
  }
  else
  {
    if(password1 == password2)
    {
      alert("Your password is " + password1);
    }
    else
    {
      alert("The entered passwords don't match.");
    }
  }
}
