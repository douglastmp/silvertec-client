import React, {useEffect, useState, useMemo} from 'react'
import Axios from '../services/axios'
import OrderCard from './OrderCard'

const Orders = () => {
    const [orders, setOrders] = useState()

    useEffect(() => {
        Axios.get('/api/orders')
        .then(response => {
            const ordersData = ([...response.data])
            setOrders(ordersData)
        })
    }, [])


    return (
        <div>
            {useMemo(() => orders ? <OrderCard registers={orders}/> : <div></div>, [orders])}
        </div>
    )
}

export default Orders