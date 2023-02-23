let button = document.getElementById("submit");

async function login(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
  }

  button.addEventListener('click', () =>{
    validateEmail();
  })

  function validateEmail(){
                
    // Get our input reference.
    var emailField = document.getElementById('user-email');
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
        alert('Email is valid');
        return true;
    }else{
        alert('Email is invalid');
        return false;
    }
}