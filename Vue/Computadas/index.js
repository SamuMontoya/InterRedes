const app = new Vue({
    el:'#app',
    data:{
       mensaje:'hey, i am Samu' ,
       contador:0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        }
    }
})