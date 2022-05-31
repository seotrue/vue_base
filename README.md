# vue로 만드는 웹게임


### 문법
- ```v-on:click="onclickButton""``` => vue가 통제하는 메소드가 연결이 된다
- ```<button v-if='조건문'> '``` => 동등한 인접한 형제일경우, 
```javascript
<script>
    const app =  new Vue({
    el:,
    data:{
    
    },
    methods: {
    
    }
})
</script>

```

### {{}}와 v-model
```javascript
<!-- html의 텍스트 노드면 --> 
{{변수명}}
으로 접근이 가능 => 랜도랑 거눙


```
- 리액트 state 의 역활은 vue의 data
- vue input의 v-modal=''' 로 하면 인풋의 입력ㄱ값과 vue의 데이터로도 반영되도록 양방향으로 값이 업데이트 되도록

### ref
this.$refs.ref로 만든 변수.focus -> 접근 가능