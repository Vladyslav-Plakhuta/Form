function validate() {
  var userInput = document.querySelectorAll(".form__input");
  var regex = /[^a-z|^A-Z|^0-9|^\s^\w+^\"']/;

  for(var i = 0; i < userInput.length; i++) {
    if(userInput[i].value === "") {
      alert("Please fill all required fields!");
      break;
    }
    else if(userInput[i].value.match(regex)) {
      alert("Please use an appropriate symbols!");
      break;
    }
    localStorage.setItem('Login', userInput[0].value);
  }
}

