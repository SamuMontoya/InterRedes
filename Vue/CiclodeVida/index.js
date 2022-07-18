const app = new Vue({
    el:'#app',
    data: {
        saludo:'soy ciclo de vida de Vue'
    },
    beforeCreate(){
        console.log('berofeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    },
    methods:{
        Destruir(){
            this.$destroy()
        }
    }
})