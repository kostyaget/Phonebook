import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookApi = createApi({
    reducerPath: 'phoneBookApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers;
        },
    }),
    tagTypes: ['Contact'],

    endpoints: bulder => ({
        getAllContacts: bulder.query({
            query: () => `/contacts`,
            providesTags: ['Contact'],
        }),

        addContact: bulder.mutation({
            query: newContact => ({
                url: `/contacts`,
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: ['Contact'],
        }),

        deleteContact: bulder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    useGetAllContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = phoneBookApi;