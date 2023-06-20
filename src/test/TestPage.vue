<template>
    <div class="about">
      {{ name }} : {{ doubleCount }}
      <button @click="store.increment">increment</button>
    </div>
</template>
  
  <script setup lang="ts">
  import { useCounterStore } from "./stores/list";
  import { storeToRefs } from "pinia";
  
  
  
  const store = useCounterStore();
  
  const { name, doubleCount } = storeToRefs(store);
  






//   타입스크립트 변수 사용 예시 https://codingapple.com/unit/how-to-install-typescript-in-local-vue-react/

  let myname :string = 'kim'; // eslint-disable-line no-unused-vars
  let 이름 :string | number = 'kim'; // eslint-disable-line no-unused-vars
  let 이름2 :string[] = ['kim', 'park']; // eslint-disable-line no-unused-vars
  let 나이 :{ age : number } = { age : 23 }; // eslint-disable-line no-unused-vars
  type NameType = 'kim' | 'park';
  let 이름3 :NameType = 'kim'; // eslint-disable-line no-unused-vars
  // 함수에서
  function 함수명(x :number) :number{ // eslint-disable-line no-unused-vars
  return x * 2
}
//가능
function 함수명2(x :number | string) { // eslint-disable-line no-unused-vars
  if (typeof x === 'number'){
    return x * 2
  } 
}
type Member = [number, boolean];
let john:Member = [100, false] // eslint-disable-line no-unused-vars


// 클래스에서
class Person { // eslint-disable-line no-unused-vars
  name;
  constructor(name :string){
    this.name = name;
  }
}
//   export default defineComponent({
//   name: "CheckView",
//   setup() {
//     const store = useCounterStore();
//     const { name, doubleCount, increment } = store;

//     return {
//       name,
//       doubleCount,
//       increment,
//     };
//   },
// });
  </script>

  <style lang="scss">
  .about {
    display:block;
    // & __aby{

    // }

  }
</style>