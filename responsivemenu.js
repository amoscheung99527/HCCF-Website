/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/*
    Created on : 9-Aug-2019, 9:50:46 PM
    Author     : Amos
*/

function myFunction() {
   //look through the document (html file) to find the element with the ID "myTopnav", which is the menu bar
  var x = document.getElementById("myTopnav");
  // when clicked on the menu bar, all the classes are shown
  if (x.className === "topnav") {
    x.className += " responsive";
  } //end if
  //when the menu bar is not clicked, only the top part (Home) will show
  else {
    x.className = "topnav";
  } //end else
}
