$(document).ready(function(){
	$('#add_profile').on('submit', function(event) {
		event.preventDefault();
		var userNameEntered = $('#username').val();

		$.get('https://api.github.com/users/' + userNameEntered, function(user) {
			var newProfile = Mustache.render($('#profile_template').html(), user);
			$('#profile_results').append(newProfile);
		})
	})
})