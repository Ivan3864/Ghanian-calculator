function myFunction() {
  var myStringDate = document.getElementById("dateProvided").value;
  var maleAkanNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var myDate = new Date(myStringDate);
  var dayOfWeek = myDate.getDay();
  document.getElementById("message").innerHTML = "Your Akan name is " + maleAkanNames[dayOfWeek] + "!";
  document.getElementById("message").innerHTML = "Your Akan name is " + femaleAkanNames[dayOfWeek] + "!";
}
