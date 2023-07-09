import axios, { AxiosInstance, AxiosResponse } from 'axios';

// API 응답 데이터 타입
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 예시 모델 타입
interface Example {
  id: number;
  name: string;
  // 추가 필드들...
}

// 예시 API 엔드포인트 URL
const API_URL = 'https://api.example.com';

// Axios를 이용한 API 요청 처리를 담당하는 Repository 클래스
class ExampleRepository {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'localhost:3000',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // 데이터 가져오기 예시 메서드
  async getExample(id: number): Promise<Example> {
    try {
      const response: AxiosResponse<ApiResponse<Example>> = await this.axiosInstance.get(`/examples/${id}`);
      const { data } = response.data;
      return data;
    } catch (error) {
      // 오류 처리
      throw new Error('Failed to fetch example data');
    }
  }

  // 추가적인 API 요청 메서드들을 구현할 수 있습니다.
}

export default ExampleRepository;


// 다른페이지 사용 예시

// import { defineComponent, ref } from 'vue';
// import ExampleRepository from './ExampleRepository';

// export default defineComponent({
//   setup() {
//     const exampleRepository = new ExampleRepository();
//     const exampleData = ref<Example | null>(null);

//     const fetchExampleData = async (id: number) => {
//       try {
//         exampleData.value = await exampleRepository.getExample(id);
//       } catch (error) {
//         console.error(error);
//         // 오류 처리
//       }
//     };

//     // 컴포넌트 라이프사이클 훅 등에서 `fetchExampleData` 호출 등을 수행할 수 있습니다.

//     return {
//       exampleData,
//       fetchExampleData,
//     };
//   },
// });