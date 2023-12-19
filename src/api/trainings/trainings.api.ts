import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { infoConstants } from '../../models/constants/info.constant';
import { Training } from '../../models/types/training.types';

const URL_TRAININGS = '/trainings';
const TRAININGS_REDUCER_PATH = 'trainingsApi';

interface GetTrainingsResponse {
  trainings: Training[];
}

export const trainingsApi = createApi({
  reducerPath: TRAININGS_REDUCER_PATH,

  baseQuery: fetchBaseQuery({
    baseUrl: infoConstants.API_BASE_URL,
  }),

  endpoints: (builder) => ({
    getTrainings: builder.query<GetTrainingsResponse, void>({
      query: () => ({
        url: URL_TRAININGS,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const trainingsReducer = trainingsApi.reducer;
export const { useGetTrainingsQuery } = trainingsApi;
