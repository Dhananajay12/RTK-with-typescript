import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Zones } from "../modal/props";


export const zonesApi = createApi({
	reducerPath: 'zonesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://flexy-aws.coyogi.com/ms/groups' }),
	tagTypes:['Zones'],
	endpoints: (builder) => ({
		getZones: builder.query<Zones[], string>({
			query: () => `/connect/filters`,
			providesTags:['Zones']
		}),
		postZones: builder.mutation<Zones, Zones>({
			query: (post) => ({
				url: '/connect/createFilter',
				method: 'POST',
				body: post
			}),
			invalidatesTags: ["Zones"]
		})

	})
})


export const { useGetZonesQuery , usePostZonesMutation } = zonesApi