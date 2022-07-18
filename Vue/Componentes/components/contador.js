Vue.component('contador',{
    template: //html
    `
    <div>
        <h2>{{counter}}</h2>
        <button @click='counter++'>+</button>
        <button @click='counter--'>-</button>
    </div>
    `,
    data(){
        return {
            counter: 0
        }
    }
})