

import './App.css'
import { useGetZonesQuery } from './store/apicall'

function App() {
	const  { isLoading  , error,  data } = useGetZonesQuery("");
	console.log(isLoading, error, data)
  return (
    <>
     {/* <p>{data}</p> */}
    </>
  )
}

export default App
