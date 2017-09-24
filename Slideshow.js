/**
*	@file Slideshow.js
*	@author Ryan Kass
*	@date 9/26/17
*	@brief functions for slide show
*/
function previous()
{
  var imgTag = document.getElementById("imgId");
  if(imgTag.getAttribute('src') === 'fruit1.jpg')
  {
    imgTag.src = "fruit5.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit2.jpg')
  {
    imgTag.src = "fruit1.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit3.jpg')
  {
    imgTag.src = "fruit2.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit4.jpg')
  {
    imgTag.src = "fruit3.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit5.jpg')
  {
    imgTag.src = "fruit4.jpg";
  }
}
function next()
{
  var imgTag = document.getElementById("imgId");
  if(imgTag.getAttribute('src') === 'fruit5.jpg')
  {
    imgTag.src = "fruit1.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit4.jpg')
  {
    imgTag.src = "fruit5.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit3.jpg')
  {
    imgTag.src = "fruit4.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit2.jpg')
  {
    imgTag.src = "fruit3.jpg";
  }
  else if(imgTag.getAttribute('src') === 'fruit1.jpg')
  {
    imgTag.src = "fruit2.jpg";
  }
}
