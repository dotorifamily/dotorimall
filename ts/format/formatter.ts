// date를 ymd(8자리) 형식으로 변환하는 formatter 함수
export function formatDateToYmd(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + month + day;
  }
  
//   export default formatDateToYmd;

// 다른 페이지 사용 예시
//   import { defineComponent } from 'vue';
// import formatDateToYmd from './formatDateToYmd';

// export default defineComponent({
//   setup() {
//     const date = new Date(); // 변환할 날짜 객체
//     const formattedDate = formatDateToYmd(date); // 변환된 날짜 문자열

//     // 변환된 날짜를 활용할 수 있습니다.

//     return {
//       formattedDate,
//     };
//   },
// });

//console.log(formattedDate); // "20230625" (현재 날짜를 기준으로 변환한 예시)



// ymd(8자리) 형식의 숫자 문자열을 날짜로 변환하는 formatter 함수
export function parseYmdToDate(ymd: string): Date {
    const year = parseInt(ymd.slice(0, 4));
    const month = parseInt(ymd.slice(4, 6)) - 1; // 월은 0부터 시작하므로 1을 빼줍니다.
    const day = parseInt(ymd.slice(6, 8));
    return new Date(year, month, day);
  }
  
//   export default parseYmdToDate;


  //사용 예시
//   import { defineComponent } from 'vue';
// import parseYmdToDate from './parseYmdToDate';

// export default defineComponent({
//   setup() {
//     const ymd = '20230625'; // 변환할 숫자 문자열
//     const date = parseYmdToDate(ymd); // 변환된 날짜 객체

//     // 변환된 날짜를 활용할 수 있습니다.

//     return {
//       date,
//     };
//   },
// });

//console.log(date); // Date 객체 (예시로 주어진 "20230625"를 변환한 날짜 객체)

