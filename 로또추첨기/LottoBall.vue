<template>
    <!-- number은 props로 받음   /- -->
    <div class="'ball" :style={background}>{{number}}</div>
</template>

<script>
    export default {
        name: 'LottoBall',
        props: {
            // 타입 지정
            number: Number,
        }, // => 줄여서 ㅔ=props: ['number]로 도 쓰임 가능

        // 기존값을(this.number) 새로운값을 도출하는 거면 (계산 하는거면) comuted로 사용
       data(){
            let background;
            if (this.number <=10)
            return{
                background,
                // 만약에 프랍스를 데이터에 할당에서 사용하구 싶으면
                // 하지만 이렇게 되면 부모의 값과 해당 컴포넌트에사 사용하는 데이터가 꼬일 가능성두 잇기에 데이터 불일치... 값을 변경하구 싶으면 내려주는 부모에서 값을 미리 ㅡ변경하고 props로 내려준다
                numberData: this.number
            }
        }

    }
</script>