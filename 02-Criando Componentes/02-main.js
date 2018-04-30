     


Vue.component('lista-tarefas', {
	
	template: '<div><tarefa v-for="tarefa in tarefas" :key="tarefa.id"> {{tarefa.descricao}}</tarefa></div>',

	data(){
		return {
			tarefas: [
				{ descricao: 'Ir ao Banco'},
				{ descricao: 'Ir ao Mercado'},
				{ descricao: 'Ir ao Jogo'},
				{ descricao: 'Ir ao Shopping'}
			]
		}
	}

});

Vue.component('tarefa', {
	template: '<li> <slot> </slot> </li>',
});


new Vue({
	el: '#app'
});