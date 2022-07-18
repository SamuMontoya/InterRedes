Vue.component('saludo', {
    template: //html
    ` 
    <div>
    <h1>{{saludo}}</h1>
    <h3>Hello Worldcito</h3>
    </div>
    `,
    data(){
        return{
            saludo:'Hello desde Vue'
        }
    }
})

const app = new Vue({
    el:'#app',
})