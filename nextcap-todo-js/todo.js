$(document).ready(function() {
	// On load, check cookies. If cookie does not exist, display welcome. If cookie does exist, pass it to Todo.startSession and display the user's to-do list
	alert(document.cookie)
	debugger;

	// Write catcher function that fills in signup or signin based on user clicking button in first div
	$('#signup-initial').click(function(e) {
		e.preventDefault();
		console.log("Signup")
		$('#welcome').hide();
		$('#signup').show();
	})

	$('#signin-initial').click(function(e) {
		e.preventDefault();
		console.log("signin")
		$('#welcome').hide();
		$('#signin').show();
	})

	// Sign Up function
	$('#signup-submit').click(function(e) {
		e.preventDefault();

		Todo.createUser({
	    email: $('#signup-email').val(),
	    password: $('#signup-password').val(),
	    success:  function(user) { 
	    	alert('user create success!');
	    	debugger;
	    	$('#signup').hide();
				$('#todo-list').show();
	    },
	    error: function(xhr) {
	    	alert('user create error!')
	    }
  	});

  	// Display todo page (write function below to display this)
	})

	// Sign In function
	$('#signin-submit').click(function(e){
		e.preventDefault();

		Todo.startSession({
			email: $('#signin-email').val(),
			password: $('#signin-password').val(),
			success: function(user) {
				alert('login success!');
				debugger;
				$('#signin').hide();
				$('#todo-list').show();
			},
			error: function(xhr) {
				alert('login error!')
			}
		});

		// Display todo page (write function below to display this)
	});

	// Sign Out function
	$('#signout').click(function(e){
		e.preventDefault();

		Todo.endSession({
      success: function(todo) { 
      	alert('logout success!')
      },
      error:   function(xhr)  { 
      	alert('logout error!')
      }
    });

    // Erase page, leave first div visible
  });
});

displayTodos = function() {
	// Erases page except for fourth div
	// Grabs user's to-dos
	// Displays them in pretty draggable box with checkboxes to the left
}