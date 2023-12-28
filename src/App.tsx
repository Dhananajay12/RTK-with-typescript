

import './App.css'
import { useGetZonesQuery } from './store/apicall'

function App() {
	const { isLoading, error, data } = useGetZonesQuery("");

	console.log(isLoading, error, data)
	return (
		<>
			<div>
				{isLoading && <p>...loading</p>}
	
				{data?.map((item) => {
					return (
						<p>{item.label}</p>
					)
				})}


				{/* {error && <p> {error} </p>} */}

			</div>
		</>
	)
}

export default App
