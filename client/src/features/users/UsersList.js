import { useGetUsersQuery } from "./usersApiSlice"


const UsersList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

  return (
    <div>
      
    </div>
  )
}

export default UsersList
