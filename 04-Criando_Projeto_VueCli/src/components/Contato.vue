<template>
    <md-card>
      
      <md-card-header>
        <div class="md-title">DIEGO RONDÂO</div>
      </md-card-header>
      
      <md-card-content>
       Example criação de um Card 
      </md-card-content>

        <md-button class="md-raised md-primary">TABLE</md-button>
        <md-button class="md-raised md-primary">CLEAR</md-button>
        
    </md-card>

</template>

<script>
export default {
  name: 'Contato',
  data () {
    return {
      msg: '(11) 9456213521'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
