<template>
    <md-card>
        <md-card-header>
            <div class="md-title">DIEGO RONDÂO</div>
        </md-card-header>
        <md-card-content>
            Example criação de um Card
        </md-card-content>
        <md-button class="md-raised md-primary" @click="table()">TABLE</md-button>
        <md-button class="md-raised md-primary" @click="limpar()">CLEAR</md-button>

        <md-table>    
                <md-table-row>
                    <md-table-cell>PRIMEIRO NOME</md-table-cell>
                    <md-table-cell>SEGUNDO NOME </md-table-cell>
                    <md-table-cell>E-MAIL</md-table-cell>
                </md-table-row>
            <md-table-row v-for="contato in contatos">
                <md-table-cell> {{contato.nome}} </md-table-cell>
                <md-table-cell> {{contato.sobrenome}} </md-table-cell>
                <md-table-cell> {{contato.email}} </md-table-cell>
            </md-table-row>
        </md-table>    
    </md-card>
</template>

<script>
export default {
  name: 'Contato',
  data: function () {
    return {
      contatos: [
        { nome: 'User 01', sobrenome:'User 01', email: 'us1@mail.com'},
        { nome: 'User 02', sobrenome:'User 02', email: 'us2@mail.com'}
      ]
    }
  },
  methods:{
    table: function (){ 
        this.contatos.push({ nome: 'Sebastian', sobrenome:'Escheweiler', email: 'sebastiab@mail.com'})
        this.contatos.push({ nome: 'Bill', sobrenome:'brazil', email: 'bill@mail.com'})
        this.contatos.push({ nome: 'Ann', sobrenome:'stheinenr', email: 'ann@mail.com'})
    },
    limpar: function () {
        this.contatos.splice(0, this.contatos.length)
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
