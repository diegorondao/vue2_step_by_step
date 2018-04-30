
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
