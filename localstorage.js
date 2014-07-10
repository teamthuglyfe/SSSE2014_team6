<form id='some-form'>
	<input id="account-name" type="text" />
	<input type="submit" value="save" />
</form>











$('#some-form').submit(function(event) {
	event.preventDefault();
	var old_accounts = window.localStorage['accounts'];
	if (typeof old_accounts != 'object') {
		old_accounts = [];
	}
	old_accounts.push($('#account-name').val());
	window.localStorage['accounts'] = old_accounts;
});