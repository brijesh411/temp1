//import { Route, Redirect} from 'react-router-dom'

// const PrivateRouter = (props) => {
//   const firstLogin = localStorage.getItem('firstLogin')
//   return firstLogin ? <Route {...props} /> : <Redirect to="/" />
// }

// export default PrivateRouter



import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'



export default function PrivateRouter() {
    let  firstLogin = localStorage.getItem('firstLogin') == null ? false : true;
    return (
        <>
            {firstLogin ? <Outlet  /> : <Navigate to="/" />};
        </>

    )

}

