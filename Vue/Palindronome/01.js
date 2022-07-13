const app = new Vue({
    el:'#app',
    data: {
        title: 'Palinondrome',
        definition: 'A word, phrase, or sequence that reads the same backwards as forwards.',
        palinondrome:'',
        flag:'',
        counter:'',
        i:0
    },
    methods:{
        execute  (){
            this.palinondrome = this.palinondrome.toLowerCase().replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "").replace(/\./g, '')
            let array = this.palinondrome.split("")
            array === array.reverse()
            let newPali = array.join("")
            if(newPali === this.palinondrome){
                this.flag = 'Palinondrome'
            }   else{
                this.flag = 'nonPalinondrome'
            }
        },
        button (){
            this.i++
            this.counter = "counter: " + this.i
            console.log(this.i)
        }
    }
}
)