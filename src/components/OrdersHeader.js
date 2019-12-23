import React, {Suspense} from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Orders from './Orders'
import CreateOrder from './CreateOrder'

const OrdersHeader = () => {

    return (
        <React.Fragment>
        <div className="navbar nav-pills mr-auto justify-content-center">
            <NavLink
                className="nav-item nav-link "
                to="/orders"
                exact
                activeClassName="active">
                Pedidos
            </NavLink>
            <NavLink 
                className="nav-item nav-link "
                to="/create-order" 
                exact
                activeClassName="active">
                Novo Pedido
            </NavLink> 
        </div>
        <Switch>
            <Route exact path="/orders" render={() => <Suspense fallback={<div>Loading...</div>}><Orders /></Suspense>} />  
            <Route exact path="/create-order" render={() => <CreateOrder/>} />
            <Route exact path="/" render={() => <Redirect to="/orders"/>}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch> 
        </React.Fragment>
       
    )
}

export default OrdersHeader