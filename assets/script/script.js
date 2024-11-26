
function checkPasswordMatch() {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var errorMessage = document.getElementById('errorMessage');

 
  if (password !== confirmPassword) {
      errorMessage.style.display = 'block'; 
  } else {
      errorMessage.style.display = 'none'; 
  }
}

checkPasswordMatch()

// document.getElementById('password').addEventListener('input', checkPasswordMatch);
// document.getElementById('confirmPassword').addEventListener('input', checkPasswordMatch);


// document.getElementById('myForm').addEventListener('submit', function(event) {
//   var password = document.getElementById('password').value;
//   var confirmPassword = document.getElementById('confirmPassword').value;
//   if (password !== confirmPassword) {
//       event.preventDefault(); 
//       alert("Passwords do not match!");
//   }
// });
