import { createApi } from "@reduxjs/toolkit/query/react"
import axios from "axios"

const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({ url, method, data, params }) => {
  try {
    const result = await axios({ url: baseUrl + url, method, data, params })
    return { data: result.data }
  } catch (axiosError) {
    let err = axiosError
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "/api/admin"
  }),
  endpoints(builder) {
    return {
      getLeads: builder.query({ query: () => ({ url: '/leads', method: 'get' }) }),
      newLead: builder.mutation({ query: (body) => ({ url: '/leads', method: 'post', data: body }) })
    }
  }
})

export const {
  useGetLeadsQuery,
  useNewLeadMutation
} = adminApi


