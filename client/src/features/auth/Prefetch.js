import { store } from '../../app/store'
import { postersApiSlice } from '../posters/postersApiSlice'; 
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => {
        // While we using react strict mode so it is going to mount, unmount and remount
        // Manual subscription: use the slice, call the endpoints, call the actual query and initiate the method
        store.dispatch(postersApiSlice.util.prefetch('getPosters', 'postersList', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))

    }, [])

    return <Outlet />
}
export default Prefetch