const app = new Vue({
    el:'#app',
    data: {
        i:0
    },
    methods:{
        button (){
            this.i = this.i + 10
        }
    },
    computed:{
        dolar(){
            const suma = this.i + 10
           return `$ ${suma}`
        }
    }
}
)