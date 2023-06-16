import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersApiSlice'
import NewPosterForm from './NewPosterForm'

const NewPoster = () => {
    const users = useSelector(selectAllUsers)

    if (!users?.length) return <p>Not Currently Available</p>

    const content = <NewPosterForm users={users} />

    return content
}
export default NewPoster