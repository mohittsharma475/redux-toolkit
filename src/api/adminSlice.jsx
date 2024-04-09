import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const adminApi = createApi({
    reducerPath:"admin",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:4100"}),
    endpoints:(builder)=>({
        getAccounts:builder.query({
            query:()=>"accounts",
            transformResponse:(response)=>response.sort((a,b)=>b.id-a.id),
            providesTags:['accounts']
        }),
        addAccount:builder.mutation({
            query:({id,amount})=>({
                url:'accounts',
                method:'POST',
                body:{id,amount}
            }),
            invalidatesTags:['accounts']   
        }),
        deleteAccount:builder.mutation({
            query:(id)=>({
                url:`accounts/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['accounts']   
        }),
        updateAccount:builder.mutation({
            query:({id,amount})=>({
                url:`accounts/${id}`,
                method:'PATCH',
                body:{amount}
            }),
            invalidatesTags:['accounts']   
        }),
    }),
});

export const {useGetAccountsQuery,useAddAccountMutation,useDeleteAccountMutation,useUpdateAccountMutation} = adminApi;