import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewPosterForm from './NewPosterForm'

const NewPoster = () => {
    const users = useSelector(selectAllUsers)

    const content = users ? <NewPosterForm users={users} /> : <p>Loading...</p>

    return content
}
export default NewPoster