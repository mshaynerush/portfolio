
			function mail(){

                var name = document.getElementById('name').value;
                var email = document.getElementById('email').value;
                var msg = document.getElementById('message').value;

                var submission = "Name: " + name + "\r\n";
                submission += "Email: " + email + "\r\n";
                submission += "Message: " + msg  + "\r\n"  + "\r\n"  + "\r\n";
                var subj = "New Message from Portfolio Site"
                var msgBody = encodeURIComponent(submission)
                var message = 'mailto:mshaynerush@gmail.com?subject=' + subj + '&body=' + msgBody;
                window.open(message);
                }  