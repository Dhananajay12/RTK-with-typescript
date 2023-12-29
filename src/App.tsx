

import './App.css'
import { Zones } from './modal/props';
import { useGetZonesQuery, usePostZonesMutation } from './store/apicall'

function App() {
	const { isLoading, error, data } = useGetZonesQuery("");
	const [newZones] = usePostZonesMutation();

	const handleSubmit = () => {

		const zone: Zones = {
			label: "",
			filterType: "",
			filterValue: ""
		}
		newZones(zone)
	}
	return (
		<>
			<div>
				{isLoading && <p>...loading</p>}

				{data?.map((item) => {
					return (
						<p>{item.label}</p>
					)
				})}

				<form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
					<div  style={{marginTop:"1rem"}} >
						<label>Enter Label Name :</label>
						<input type="text" placeholder='Label' />
					</div>
					<div style={{ marginTop: "1rem" }}>
						<label>Filter Type :</label>
						<input type="text" placeholder='Filter Type' />
					</div>
					<div style={{ marginTop: "1rem" }}>
						<label>Filter Value : </label>
						<input type="text" placeholder='Filter Value' />
					</div>
					<button type='submit' style={{ marginTop: "1rem" }}>Submit</button>
				</form>
				{/* {error && <p> {error} </p>} */}

			</div>
		</>
	)
}

export default App
