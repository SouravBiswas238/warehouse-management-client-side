import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://tranquil-beach-35648.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [services]);



    const handelDelete = (id) => {
        const proceed = window.confirm('Are you sure want to delete');
        if (proceed) {
            // console.log('delete', id);
            const url = `https://tranquil-beach-35648.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {

                        // console.log('deleted', services[0]._id);
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining);
                        console.log(remaining);

                    }
                })

        }

    }

    return {
        services,
        setServices,
        handelDelete
    };
}

export default useService;