import { useEffect, useState } from "react"
import UserItem from "./UserItem"
import spinner from '../Images/Spinner.svg'


function UsersResult() {
    
    const [users, setUsers] = useState([])
    const [loading, setLoading] =   useState(true)

    useEffect (() => {
        fetchUsers()

    }, [])

    const fetchUsers = async () => {
        const response = await fetch (`https://randomuser.me/api/?results=40&seed=aboveit&exc=login`)
        const data = await response.json()
        console.log(data)
        setUsers(data.results)
        setLoading(false)
    }
    // note: For instance, a website header might use flex to align items horizontally,
    //  while a main content section might use grid to structure articles in rows and columns.
    if(!loading) {

        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md: grid-cols-2 ">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
        )
        } else {
        return  (
        <img src={spinner} alt="Loading..." className="mx-auto my-auto"/>  //mx-auto and my-auto will place image in center horizontally and vertically.
        )
        }

}

export default UsersResult
