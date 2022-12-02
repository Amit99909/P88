var canvas = document.getElementById("myCanvas");
// Create canvas variable

//Set initial positions for ball and hole images.
var ball_x = 5;
var ball_y = 5;
var holex= 90;
var holey= 90;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	src="https://as2.ftcdn.net/v2/jpg/01/17/49/73/1000_F_117497396_WybJYTwxQ1tUWUPt4jUkjzIT22mA0UPM.jpg";
	new_image();
}

function new_image()
{
	src="https://media.istockphoto.com/id/1225609011/vector/golf-ball-illustration-in-a-white-background-for-assembly-or-creates-teaching-material-for.jpg?s=612x612&w=is&k=20&c=WEqTuYL6ye1-45FA7te0WzG_TzhI6P25j3f-9TNXDGY=";
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	
		
	 else {


		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
	}

	function down()
	{
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
		}
	}
	
}

