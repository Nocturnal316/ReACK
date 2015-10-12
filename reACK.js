window.onload = function() {
    var socket = io();

    window.onkeypress = function (e) {
    	console.log(e.keyCode);
    	// J
    	if(e.keyCode === 106) {
    		socket.emit('jerk', "I jerk");
    	}

    	// K
    	if(e.keyCode === 107) {
    		socket.emit('kick', "I kick");
    	}
    }
}
