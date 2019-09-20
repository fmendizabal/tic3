function sayHola(){
	document.getElementById("clickable").innerHTML = "<h1>Has hecho click</h1>"
}

document.querySelector("body")
		.addEventListener("mousemove",
			function(event){
				if(event.shiftKey === true){
				console.log("x: "+event.clientX);
				console.log("Y: "+event.clientY);
				}
			}
		);
