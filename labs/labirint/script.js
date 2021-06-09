let	ball 					= document.querySelector(".ball"),
	width 					= 10,
	height					= 10;

document.addEventListener('keyup', function(event){
   // console.log('Key: ', event.key);
   // console.log('keyCode: ', event.keyCode);

    if (((event.keyCode == 68) || (event.keyCode == 39)) && !(width > 495)) {
    	console.log("d");
    	width = width+54;
    	ball.style.left = ""+`${width}`+"px";
    }

    if (((event.keyCode == 83) || (event.keyCode == 40)) && !(height > 495)) {
    	console.log("s");
    	height = height+54;
    	ball.style.top = ""+`${height}`+"px";
    }

    if (((event.keyCode == 87) || (event.keyCode == 38)) && !(height < 50)) {
    	console.log("w");
    	height = height-54;
    	ball.style.top = ""+`${height}`+"px";
    }

    if (((event.keyCode == 65) || (event.keyCode == 37)) && !(width < 50)) {
    	console.log("a");
    	width = width-54;
    	ball.style.left = ""+`${width}`+"px";
    }
});

