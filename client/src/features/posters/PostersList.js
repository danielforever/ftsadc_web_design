import { useGetPostersQuery } from "./postersApiSlice"
import Poster from "./Poster"
import useAuth from "../../hooks/useAuth"

const PostersList = () => {

    const { username, isManager, isAdmin } = useAuth()

    const {
        data: posters,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostersQuery('postersList',  {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids, entities } = posters

        // Change login in future may filtered my association
        let filteredIds
        if (isManager || isAdmin) {
            filteredIds = [...ids]
        } else {
            filteredIds = ids.filter(posterId => entities[posterId].username === username)
        }

        const tableContent = ids?.length
            && filteredIds.map(posterId => <Poster key={posterId} posterId={posterId} />)

        content = (
            <table className="table table--posters">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th poster__status">Finished</th>
                        <th scope="col" className="table__th poster__created">Created</th>
                        <th scope="col" className="table__th poster__updated">Updated</th>
                        <th scope="col" className="table__th poster__title">Title</th>
                        <th scope="col" className="table__th poster__username">Owner</th>
                        <th scope="col" className="table__th poster__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

  return content
}

export default PostersList
