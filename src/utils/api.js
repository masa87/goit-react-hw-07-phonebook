import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61f8572d783c1d0017c446a1.mockapi.io/",
  }),
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `contacts/`,
      providesTags: ["Contacts"],
    }),
    postContact: build.mutation({
      query: (contact) => ({
        url: "contacts/",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = api;
