import { useGetPostersQuery } from "./postersApiSlice"
import Poster from "./Poster"

const PostersList = () => {
    const {
        data: posters,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostersQuery(undefined,  {
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

        const { ids } = posters

        const tableContent = ids?.length
            ? ids.map(posterId => <Poster key={posterId} posterId={posterId} />)
            : null

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
