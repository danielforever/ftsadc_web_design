import { useParams } from 'react-router-dom'
import EditPosterForm from './EditPosterForm'
import useAuth from '../../hooks/useAuth'
import { useGetUsersQuery } from '../users/usersApiSlice'
import { useGetPostersQuery } from './postersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

const EditPoster = () => {
    useTitle('techNotes: Edit Note')
    const { id } = useParams()

    const { username, isManager, isAdmin } = useAuth()

    const { poster } = useGetPostersQuery("postersList", {
        selectFromResult: ({ data }) => ({
            poster: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!poster || !users?.length) return <PulseLoader color={"#FFF"} />
    
    if (!isManager && !isAdmin) {
        if (poster.username !== username) {
            return <p className="errmsg">No access</p>
        }
    }
    const content = <EditPosterForm poster={poster} users={users} />

    return content
}
export default EditPoster