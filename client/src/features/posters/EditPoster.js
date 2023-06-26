import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectPosterById } from './postersApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditPosterForm from './EditPosterForm'

import { useGetUsersQuery } from '../users/usersApiSlice'

const EditPoster = () => {
    const { id } = useParams()

    const poster = useSelector(state => selectPosterById(state, id))
    const users = useSelector(selectAllUsers)

    const content = poster && users ? <EditPosterForm poster={poster} users={users} /> : <p>Loading...</p>

    return content
}
export default EditPoster