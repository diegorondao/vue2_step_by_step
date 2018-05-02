
Vue.component('modal', {
props:['title'],
template:
	`
		<div class="modal is-active" >
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">{{title}}</p>
                  <button class="delete" @click="$emit('meuclickfechar')"  aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                	<slot> </slot>
                </section>
                <footer class="modal-card-foot">
			      <button class="button is-success">Save changes</button>
			      <button class="button">Cancel</button>
			    </footer>
            </div>
        </div>
    `,
}),

new Vue({
	el: '#app',
	data:{
		showModal:false
	}
})
