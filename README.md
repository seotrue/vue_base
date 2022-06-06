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

### 로더
로더는 웹팩이 웹 애플리케이션을 해석할때 자바스크립트 파일이 아닌 웹자원들을 변호나 할수록 도와주는 속성
엔드리나 아웃풋 속성과는 다르게 모듈라는 이름을 사용


### v-for
```
/// object은 뷰 인스턴스에 있는 데이터 
<div v-for='value in object'></div>


new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})
```

### @ 
- @은 v-on:을 대신해서 사용할수 잇다
```
// 원래는 v-on:submit
// e.preventDefult() 대용으로
<form @submit.prevet = "메소드">

```
으로 사용 가능하다 