import { useOutletContext } from "react-router-dom"

function HostVanPhotos(){
    const {currentVan} = useOutletContext()
    
    return <h1>Host Van Photos component</h1>
}

export default HostVanPhotos