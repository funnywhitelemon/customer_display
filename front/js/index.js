
const fild = document.querySelector(".info");



//setInterval(updCustomerInfo, 1000);

var app = new Vue({
    el: '#app',
    data: {
        receipt: {
            goods: [],
            total: null,
            number: null
        },
    },
    methods: {
        async  updCustomerInfo(e){
            let res = await fetch("http://localhost:3000/api/getInfo")
            let info = await res.json();
            this.receipt = info;
            
            elReceipt = document.body.querySelector('.receipt');
            elReceipt.scrollTop = elReceipt.scrollHeight;
        },
        
    },
    mounted(){
        setInterval( this.updCustomerInfo, 500);
    }
  })