// import axios from 'axios';

// export const fetchFreelancers = async (setFreelancers: (data: any) => void) => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         const freelancerData = response.data.map((freelancer: any) => ({
//             name: freelancer.name,
//             city: freelancer.address.city,
//             description: freelancer.company.catchPhrase,
//             specialty: freelancer.company.bs,
//         }));
//         setFreelancers(freelancerData);
//     } catch (error) {
//         console.error('Ошибка при получении данных фрилансеров:', error);
//     }
// };

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const freelancersApi = createApi({
  reducerPath: 'freelancersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api/' }), 
  endpoints: (builder) => ({
    getFreelancers: builder.query<any, void>({
      query: () => '?results=50&nat=us', 
    }),
  }),
});

export const { useGetFreelancersQuery } = freelancersApi;
