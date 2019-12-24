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

    const searchHandle = (event) => {
        Axios.get('/api/orders?search='+ event.target.value)
        .then(response => {
            const ordersData = ([...response.data])
            setOrders(ordersData)
        })
    }


    return (
        <div className="container mt-5">
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <input className="search_input" type="text" name="" onChange={searchHandle} placeholder="Digite o nome do cliente"/>
                    <a href="/#" className="search_icon"><i className="fas fa-search"></i></a>
                </div>
            </div>
            {useMemo(() => orders ? <OrderCard registers={orders}/> : <div></div>, [orders])}
        </div>
    )
}

export default Orders