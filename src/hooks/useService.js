import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://tranquil-beach-35648.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services];
}

export default useService;