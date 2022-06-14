// 데이터 중앙 통제
// 뷰엑스는 스토어를 여러개 만들어두 됨

export const SET_WINNER = 'SET_WINNER'; // import { SET_WINNER, CLICK_CELL, CHANGE_TURN } from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

import Vuex from 'vue'
export default new Vuex.Store({
    state:{
        winner: ''
    }, // vue의 data 와 비슷
    getters: {

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
})