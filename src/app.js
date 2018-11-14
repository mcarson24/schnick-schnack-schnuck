import Vue from 'vue';

import GameBoard from './components/GameBoard.vue';

Vue.component('gameboard', GameBoard);

const app = new Vue({
	el: '#app'
});
