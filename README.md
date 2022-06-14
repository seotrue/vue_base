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


### watch
- 최대한 사용하지마라?
            // 어떤 값이 바꼇는데 안바꼇는지 감시하는 역활
            // 감사히구 싶은 데이터의 변수를 함수명으로 해주고 해당 값이 변경될때 동작할 함수를 넣어줄수 잇다

### this.$root, this$parent
- 자식 컴포넌트가 최상위 컴포넌트를 조작 및 접근이 가능하다
```vue
 this.$root.$data //c최상위 데이터 접근 가능
 this.$parent.$data // 바로 위 부모 컴포넌트 접근 가능
```

### vue.set
- 뷰에서 내부의 값을 배열로 인덱스로 접근하여 값을 변경하면 화면에 반영이 안된다
- 객체나 배열은 인덱스를 사용해서 데이터를 바뀌면 실제로 화면에 반영이 안된다

- but  배열의 메소드 푸시등 이런걸로 사용하면 화면이 바뀐다
```vue
// 방법 1 =>귀찮게 vue 임폴트 안하구 this.$set 사용
import Vue from 'vue'
Vue.set(접근할 배열, 인덱스, '넣구 싶은 값)

// 방법 2: 
this.$set(접근할 배열, 인덱스, '넣구 싶은 값)
```

### event bus
- 이벤트를 중앙에서 통제
- 이벤트의 중앙 매개체
```vue
import Vue from 'vue'
// 깡통 뷰를 하나 만듬
export default new Vue()

```

```vue
// 다른 컴포넌트에서  불러오고 등럭해줌
created(){
// 최상위에 이벤트 등록
EventBus.$on('이벤트 이름정의', 메소드에 등록한 함수 )
```

- ```emit``` 과 ```on```은 대응된다

## vuex
- 데이터 중앙 통제 관리실
- 리액트는 리덕스 뷰는 vuex
- 뷰엑스는 스토어를 여러개 만들어두 됨
- 폴더 vuex 에 정리

 > npm i vuex

```vue

 state:{
        winner: ''
    }, // vue의 data 와 비슷
    getters: {
        // state의 추가적인 작업을 할때 사용 => 캐싱 되기 때문에
    }, // vue의 computed와 비슷
    mutations:{
        // 대문자로 지어야함,state를 바뀌고 싶을때 사용
        [SET_WINNER](state, winner) {
            state.winner = winner
        }  ,
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }) {
            // vuex 에서도 인덱스로 접근해서 변경할 경우 화면이 안바뀌므로 vue.set사용
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ];
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    }, // state를 수정할때 사용 동기적으로

    actions: {
    
    }// 비동기 사용할때, 또는 여러 뮤테이션을 연달아 실핼할때
```

```vue
// 다른 컴포넌트에서 mutations에 접근할려면
this.$store.commit('CLICK_CELL)
```

- mutations 접근 시 this.$store.commit('mutatins 이름')
// 첫번째 인수는 뮤테이션 이름, 두번째인수는 데이터!! 전달 
- this.$store.commit('mutatins 이름', 인수로 넘겨줄 데이터도 넣을수 잇음 두번째 인수에)

- vuex의 state를 쓸려면 반드시 computed 에다 연결을 해줘야함
```vue
computed: {
    tableData() {
        // 스토어에서 데이터를 가져옴 
        return this.$store.state.tableDate
    }
}
```

- 뷰와 뷰엑스 연결
Vue.use(Vuex)

- 스토어와 최상의 컴포넌트 연결 스크립트 단에 
    store, 
    
    
### mapState
- 스토어의 state를 가져와서 쓸때 컴포넌트 마다 computed 마다 쓰기 구찮으니
```vue
import { mapState } from 'vuex
computed: {
    ...mapState(['스토어에서 가져올 state 명])
  // or
    ...mapSate({
       winner: state => state.winner
       })
}
```

### slot
- 프랍스로 자식컴포넌트로 넘기는 방법 외에 다른 방법이 잇다
- <컴퍼넌트태그>사이에 전달할 내용을 넣는다</컴퍼넌트태그>
```vue
// 1번.js
<부모>
<tr v-for="(value, idx) in 데이터">
<td @click="">
</tr>
</부모>
```

```vue
// 부모.js
<table>
    //slot 으로 받는다
    <slot/>
</table>
```
- slot을 여러개 사용도 가능
- slot 사이에 기본값 넣을수도 잇음 
- 리액트 칠드런 역활

### 라우터
- ```this.$router```, ```this.$route```