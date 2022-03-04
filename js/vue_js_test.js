    var mytext;
    var a = 0;
    var b = 0;
    var disp_name = new Vue({
        el: "#disp_name",
        data: {
            a_inp: "aを入力",
            b_inp: "bを入力",
            calcreq: "a + b =",
            calc_result: "未計算",
            title: "お名前を入力してください",
            name: "未入力"
        },
        methods: {
            a_set: function(event) {
                a = Number(event.target.value);
            },
            b_set: function(event) {
                b = Number(event.target.value);
            },
            calc: function(){
                this.calc_result = func(a, b) + "です";
            },
            text: function($event) {
                mytext = $event.target.value;
            },
            show: function() {
                if(mytext == null || mytext == '') {
                    this.name = "入力してください。";
                }else{
                    this.name = mytext + "さんが入力しました。";
                }    
            }
        }
    });
    function func(val1, val2){
        return val1 + val2;
    }