import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Zones } from "../modal/props";


export const zonesApi = createApi({
	reducerPath:'zonesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://flexy-aws.coyogi.com/ms/groups'}),
	endpoints:(builder) => ({
		getZones: builder.query<Zones[], string>({
			query: () => `/connect/filters`,
	 })
	})
})


export const  { useGetZonesQuery} = zonesApi