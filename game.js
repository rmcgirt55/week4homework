$(document).ready(function() {
	//	variables
		crystals = ['assets/images/red.jpeg','assets/images/blue.jpeg','assets/images/yellow.jpeg','assets/images/green.jpeg'];
	
		var counter = 0;
		var wins = 0;
		var losses = 0;
		//determining win and loss counter
		$('#win').text(wins);
		$('#loss').text(losses);
		
		newCrystals();
		newGame();
		function newCrystals () {
			var numbers = []
				while(numbers.length < 4){
					//Math.ceil will round the number into the nearest whole nuber
					
					
				  var randomNumber = Math.ceil(Math.random()*15)
				  var found = false;
				  for (var i=0; i< numbers.length; i++){
					//determines the random number 
					if (numbers[i] == randomNumber){
						found = true; break
					}
				  }
				  //chooses the random nuber for the round
				  if(!found)numbers[numbers.length]=randomNumber;
				}
			
			for (i = 0; i < numbers.length; i++) {
				var imageCrystal = $('<img>');
				imageCrystal.attr('data-num', numbers[i]);
				imageCrystal.attr('src', crystals[i]);
				imageCrystal.attr('alt', 'crystals');
				imageCrystal.addClass('crystalImage')
				$('#crystals').append(imageCrystal);
			}
		}
	
		function newGame() {
	
			counter = 0;
			$('#yourScore').text(counter);
	
			function randomIntFromInterval(min,max){
				   return Math.floor(Math.random()*(max-min)+1);
				}
	
			var numberToGuess = randomIntFromInterval(19,120);
	
			$('.value').text(numberToGuess);
	
	
			$('.crystalImage').on('click', function(){
				counter = counter + parseInt($(this).data('num'));
			   
				$('#yourScore').text(counter);
		//	user's win 
				if (counter == numberToGuess){
				  $('#status').text('You won!!!!');
				  wins ++;
				  $('#win').text(wins);
				  console.log(wins)
				  $('#crystals').empty();
				  newCrystals();
				  newGame();
		//	user's losses	        
				} else if ( counter > numberToGuess){
					$('#status').text('You lost!');
					losses ++;
					$('#loss').text(losses);
					console.log(losses)
					$('#crystals').empty();
					newCrystals();
					newGame();
				}
			});
		}
	
	});