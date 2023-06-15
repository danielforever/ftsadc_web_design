import { store } from '../../app/store'
import { postersApiSlice } from '../posters/postersApiSlice'; 
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        // While we using react strict mode so it is going to mount, unmount and remount
        console.log('subscribing')
        // Manual subscription: use the slice, call the endpoints, call the actual query and initiate the method
        const posters = store.dispatch(postersApiSlice.endpoints.getNotes.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        // It will unsubscribe when it leave the protected page in 60 seconds
        return () => {
            console.log('unsubscribing')
            posters.unsubscribe()
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch