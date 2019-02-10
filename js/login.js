$(document).ready(function(){
	// body...
	$("#ar").click(function(){
 document.getElementById("dire").dir="rtl";
  document.getElementById("title").innerHTML="نظام سجلات الطلاب ";
  document.getElementById("user").placeholder = "معرف المستخدم";
  document.getElementById("pass").placeholder = "كلمة المرور";
  document.getElementById("rmber").placeholder = "تذكرني";
  document.getElementById("but").value = "تسجيل دخول ";
 
});
	$("#eng").click(function(){
 document.getElementById("dire").dir="ltr";
  document.getElementById("title").innerHTML="Student Information System";
  document.getElementById("user").placeholder = "User ID";
  document.getElementById("pass").placeholder = "Password";
  document.getElementsByTagName("label").placeholder = "Remaber";
  document.getElementById("but").value = "Login";
});
});