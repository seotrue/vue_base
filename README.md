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

### computed  속성
- 사용이유:  일반 데이터를 가공해서 사용할땨 사용한다. => 값이 캐싱 된다=> 성능
```vue
export default {
    data(){
        return {
        
        }       
    },
    computed:{
        average(){
           return // 계산하는 로직 
        }
    }
```
### v-shoe
- ```vue
  // 헤당 조건식이 true 일때 해당 요소가 보인다
  
<div v-show="조건식"></div>
```

- v-if vs v-show
    1. 똑같이 안보이지만 v-show는 태그는 잇으나 display:nopne이지만 v-if 은 아예 태그 자체가 없음
    2. 단순히 눈에 안보는거나 아예 없는 건가
```vue
export default {
    data(){
        return {
        
        }       
    },
    computed:{
        average(){
           return // 계산하는 로직 
        }
    }
```

### 감싸주는 용도로 div 를 안쓰고 싶으면
- ```vue
 <template>
    <div v-show="조건식"></div>
</template>
```
- 가장 위에 탬플릿을 아래에는 탬플릿을 사용할수 없고 중간 쓸모없는 애들만 탬플릿만 사용가능

###scoped
- <style scoped></style> //scoped 사용시 해당 스타일을 전역으로 사용하지 않고 해당 컴포넌트에만 전용하겠다


## vue 라이프사이클
- ```created``` ,```mounted```, ```updated``` ,```destroyed```


```vue

<script>
export default {
    data(){
/// 이래야지만 컴포넌트로 사용시 여러 개를 반복하는 컴포넌트엿을때 각각 알아서 데이터가 찾아간다.
        return {
            
        }       
    }       ,
    computed: {
    
    },
    methods:{
        함수명(){}
    },
    created() {}
    // 화면에 없다가 생기는 순간 실행 => 컴퍼넌트가 보여질때 화면엔 없지만 컴포넌트가 보여질때 실행// 데이터들이 다 맵핑 될때 실핼ㅇ!!!!!!!!!!!!!!!!
    },
    mounted(){
    // created 되구 실제 화면에 그릴때 실행 => 화면에 나타난 후 => 
    
    },
    updated(){
    // 데이터가 바뀌면 화면이 바뀌는데 그 화면이 바뀔때 실행
    },  
    beforDestroy(){
        // clearInterval() 사용
    }

    destroyed() {
        // g화면에 잇다가 없어질때 
    }   

</script>
```