function sendmail(){
    var message = document.getElementsByName('message')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var subj =document.getElementsByName('subject')[0].value;
    $.get(
	"mail.php?from="+email+"&sub="+subj+"&msg="+message,
	
	function(data) {
	    alert('Your message has been sent!' + data);
	}
    );

}
