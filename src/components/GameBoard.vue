<template>
	<div>
		<div class="scoreboard" :class="resultClass">
			<div class="badge" id="user" :class="resultClass">user</div>
			<div class="badge" id="computer" :class="resultClass">comp</div>
			<span v-model="userScore" v-text="userScore"></span> :
			<span v-model="computerScore" v-text="computerScore"></span>
		</div>
		<div class="result">
			<h1 v-text="message"></h1>
		</div>
		<div class="playground">
			<div class="participant" id="user">
				<h2>Your Choice</h2>
				<img :src="userChoiceImage" id="userChoice" :class="userChoice" alt="">
			</div>
			<div class="participant" id="computer">
				<h2>My Choice</h2>
				<img :src="computerChoiceImage" id="computerChoice" :class="computerChoice" alt="">
			</div>
		</div>
		<p class="message">Make your choice</p>
		<div class="choices">
			<div class="choice" @click="game('rock')">
				<img src="images/rock.png" alt="Drawing of a hand forming a rock">
			</div>
			<div class="choice" @click="game('paper')">
				<img src="images/paper.png" alt="Drawing of a hand forming paper">
			</div>
			<div class="choice" @click="game('scissors')">
				<img src="images/scissors.png" alt="Drawing of a hand forming scissors">
			</div>
		</div>
		<div class="buttons">
			<button class="reset" @click="resetScores">Reset Score</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userScore: 0,
				computerScore: 0,
				message: "Let's play Rock Paper Scissors!",
				userChoice: 'rock',
				computerChoice: '',
				winner: 'none'
			}
		},
		methods: {
			game(choice) {
				this.userChoice = choice;
				this.computerChoice = this.getComputerChoice();

			 	if (this.userChoice.localeCompare(this.computerChoice) === 0) return this.draw();

			 	if (this.userChoice === 'rock') {
			 		switch (this.computerChoice) {
			 			case 'paper':
			 				return this.loss('Paper covers rock');
						case 'scissors':
							return this.win('Rock break scissors');
					}
			 	}
			 	if (this.userChoice === 'paper') {
			 		switch (this.computerChoice) {
			 			case 'rock':
			 				return this.win('Paper covers rock');
						case 'scissors':
							return this.loss('Scissors cut paper');
			 		}
			 	}
			 	if (this.userChoice === 'scissors') {
			 		switch (this.computerChoice) {
			 			case 'rock':
			 				return this.loss('Rock breaks scissors');
						case 'paper':
							return this.win('Scissors cut paper');
			 		}
			 	}
			},
			getComputerChoice() {
				let validChoices = ['rock', 'paper', 'scissors'];

				let randomInteger = Math.floor(
					Math.random() * 3
				);

				return validChoices[randomInteger];
			},
			resetScores() {
				this.computerScore = 0;
				this.userScore = 0;
			},
			win(outcome) {
				this.message = `${outcome}. You win!`;
				this.userScore++;
				this.winner = 'user';
			},
			loss(outcome) {
				this.message = `${outcome}. I win!`;
				this.computerScore++;
				this.winner = 'computer';
			},
			draw() {
				this.message = "It's a draw."
				this.winner = 'none';
			}
		},
		computed: {
			computerChoiceImage() {
				return `images/${this.computerChoice}.png`;
			},
			userChoiceImage() {
				return `images/${this.userChoice}.png`;
			},
			resultClass() {
				if (this.winner == 'user') return 'win';
				if (this.winner == 'computer') return 'loss';
			}
		},
		created() {
			this.computerChoice = this.getComputerChoice();
		}
	}
</script>
