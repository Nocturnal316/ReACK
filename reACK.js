window.onload = function() {
    var team;
    var ioClient = io();
    ioClient.on("hi",  function(msg){
        team = (parseInt(msg) % 2 === 0 ? "redteam" : "blueteam");
        console.log(team);
        console.log(msg);
    });

    ioClient.on("redteam", function(msg) {
        var red = document.getElementById('red-messages');
        var li = document.createElement('li');
        red.appendChild(li);
        alert("WOOPIEAA");
        li.innerText(msg);
    });

    ioClient.on("blueteam", function(msg) {
        var blue = document.getElementById('blue-messages');
        var lblue = document.createElement('li');
        blue.appendChild(lblue);
        lblue.innerText(msg);
        alert("WOOPIE");
    });

    window.onkeypress = function (e) {
    	// J
    	if(e.keyCode === 106) {
    		ioClient.emit("action", { msg: "I jerk", team: team});
    	}

    	// K
    	if(e.keyCode === 107) {
    		ioClient.emit("action", { msg: "I kick", team: team});
    	}


    }
}
