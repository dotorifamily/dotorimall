// stores/list.js
// `defineStore()`의 반환 값(함수)을 할당할 변수의 이름은 원하는 대로 지정할 수 있지만,
// 스토어 이름을 사용하고 `use`와 `Store`로 묶는 것이 가장 좋습니다.
// 예: `useUserStore`, `useCartStore`, `useProductStore`
// 첫 번째 인자는 앱 전체에서 스토어의 고유 ID입니다.
//composition API
//https://ryuhojin.tistory.com/17
import { defineStore } from "pinia";
import { ref, computed } from "vue";

// export const useListStore = defineStore("list", () => {
//   const list = ref([]); // state
//   function addList(param) { // actions
//     list.value.push(param);
//   }
//   const getDataAll = computed(() => list.value); // getters
//   return { list, addList, getDataAll };
// });

// composition API
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0) // state (data)
    const name = ref('Eduardo') 
    const doubleCount = computed(() => count.value * 2) //getters
    function increment() { // action (methods)
      count.value++
    }
  
    return { count , name, doubleCount, increment }
  })

  // option API
  export const useStore = defineStore('storeId', {
    // 화살표 함수는 전체 유형 유추을 위해 권장됨. 
    state: () => {
      return {
        // 이 모든 속성은 자동으로 유형이 유추됨.
        count: 0,
        name: 'Eduardo',
        isAdmin: true,
        items: [],
        hasChanged: true,
      }
    },
  })
// optional API
// import { defineStore } from "pinia";

// export const useListStore = defineStore("list",{
//   state : () => ({ list: [] }),
//   actions: {
//     addList(param){
//       this.list.push(param);
//     }
//     //addList: (param) => this.list.push(param);
//   },
//   getters: {
//     getAllList(state){
//       return state.list;
//     }
//     //getAllList: (state) => state.list
//   }
// });