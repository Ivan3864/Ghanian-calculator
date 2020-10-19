function myFunction() {
  var myStringDate = document.getElementById("dateProvided").value;
  var maleAkanNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var myDate = new Date(myStringDate);
  var dayOfWeek = myDate.getDay();
  if (gender=="male") {
  	alert("Your Male Akan name is " + maleAkanNames[dayOfWeek] + "!");  return false;
  } if (gender=="Female") {
  	alert("Your Female Akan name is " + femaleAkanNames[dayOfWeek] + "!"); return false;
  } else {
    alert("You entered an invalid day or month, please try again");
 }
}
  
