function change()
{
  var paraTag = document.getElementById('theParagraph');
  var borderRTag = document.getElementById('borderRedInp');
  var borderGTag = document.getElementById('borderGreenInp');
  var borderBTag = document.getElementById('borderBlueInp');
  var borderWTag = document.getElementById('borderWidthInp');
  var backRTag = document.getElementById('backRedInp');
  var backGTag = document.getElementById('backGreenInp');
  var backBTag = document.getElementById('backBlueInp');
  var borderColr = "rgb(" + borderRTag.value + "," + borderGTag.value + "," + borderBTag.value + ")";
  var borderWid = borderWTag.value + "px";
  var backColr = "rgb(" + backRTag.value + "," + backGTag.value + "," + backBTag.value + ")";
  paraTag.style.borderColor = borderColr;
  paraTag.style.borderWidth = borderWid;
  paraTag.style.backgroundColor = backColr;
}
