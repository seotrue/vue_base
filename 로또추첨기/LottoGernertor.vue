<template>
    <div>
        <div>당첨숫자</div>
        <div id="resultView">
            <lotto-ball :number="5"> </lotto-ball>
        </div>
    </div>
</template>
<script>
    import LottoBall from "./LottoBall";
    let timeout =[]
    export default {
        // 사용하는 자식 컴포넌트를 등록해줘야함
        components: {
            //'lotto-ball':LottoBall // =>축약으로 줄일수 잇음
            LottoBall
        },
        data(){
            return {
                winNumbers: 1,
                winBall: [],
                bonus: null,
                redo: false
            }
        },
        computed: {

        },
        mounted() {
            //g화면이 뜨지마자 실행 볼이 하나씩 보인다.
            for(let i=0; i<this.winNumbers.length -1; i++){
                setTimeout(()=>{
                    this.winBall.push(this.winNumber[i])
                },(i+!) *1000)
            }
        },
        beforeDestroy() {
          //
          timeout.forEach((t)=>{
              clearTimeout(t)
          })
        },
        methods: {

        },
        watch :{
            // 어떤 값이 바꼇는데 안바꼇는지 감시하는 역활
            // 감사히구 싶은 데이터의 변수를 함수명으로 해주고 해당 값이 변경될때 동작할 함수를 넣어줄수 잇다

            winBall(val, oldval){

            }
        }
    }
</script>