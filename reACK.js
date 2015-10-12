window.onload = function() {
    var ioClient = io.connect('http://localhost:3000');
    ioClient.on("hi",  function(msg){
        alert('Confirmed, I am #' + msg);
    });
    window.onkeypress = function (e) {
    	console.log(e.keyCode);
    	// J
    	if(e.keyCode === 106) {
    		ioClient.emit('jerk', "I jerk");
    	}

    	// K
    	if(e.keyCode === 107) {
    		ioClient.emit('kick', "I kick");
    	}


    }
}
