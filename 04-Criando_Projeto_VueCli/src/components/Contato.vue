<template>
  <p>Telefone da empresa {{msg}}</p>

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
