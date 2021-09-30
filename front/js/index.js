
const fild = document.querySelector(".info");



//setInterval(updCustomerInfo, 1000);

var app = new Vue({
    el: '#app',
    data: {
        receipt: {
            goods: [],
            total: null
        },
    },
    methods: {
        async  updCustomerInfo(e){
            let res = await fetch("http://localhost:3000/api/getInfo")
            let info = await res.json();
            this.receipt = info;
        }
    },
    mounted(){
        setInterval( this.updCustomerInfo, 500);
    }
  })