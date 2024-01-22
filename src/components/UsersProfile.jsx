import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import spinner from '../Images/Spinner.svg'



function UsersProfile() {
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] =   useState(true)


    const { name } = useParams();
    useEffect (() => {
      fetchUsers()

    }, [])

const fetchUsers = async () => {
    const response = await fetch (`https://randomuser.me/api/?results=40&seed=aboveit&exc=login`)
    const data = await response.json()
    // console.log(data)
    setUserProfile(data.results.find(user => user.name.first === name))
    setLoading(false)
}
  

  if(!loading) {

    return (
        <>
        {userProfile ? (
          <div className="w-full mx-auto lg:w-10/12">
            <div className="mb-4">
              <Link to='/' className="btn btn-ghost">
                Back to Users
              </Link>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-8 mb-8">
            <div className="relative group mb-6 md:mb-0">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl card">
               <img
                  src={userProfile.picture.large}
                  alt="large pic"
                  className="object-cover w-full h-full"
               />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white transition-opacity group-hover:opacity-100 opacity-0">
              <h2 className="card-title mb-0">
                {userProfile.name.first + ' ' + userProfile.name.last}
              </h2>
            </div>
            </div>

            <div className="col-span-2">
              <div className="mb-4">
                <h1 className="text-3xl card-title">
                {userProfile.name.title + '. ' + userProfile.name.first + ' ' + userProfile.name.last}

                </h1>
                <div className="flex items-center gap-4">
                  <LiaBirthdayCakeSolid size={30}/>
                  {userProfile.dob.date.substring(0, 10)}
                </div>
                <div className="flex gap-4" >
                  <MdEmail size={30}/>
                  {userProfile.email}
                </div>
        
                <div className="flex gap-4" >
                  <FaPhoneAlt size={30}/>
                  {userProfile.phone}
                </div>

                <div className="flex gap-4" >
                  <FaLocationDot size={30}/>
                  {userProfile?.location?.street?.number || ''} {userProfile?.location?.street?.name || ''}, {userProfile?.location?.city || ''}, {userProfile?.location?.state || ''} {userProfile?.location?.postcode || ''}, {userProfile?.location?.country || ''}
                </div>

              </div>
            </div>
          </div>
          </div>
          

        ) : (
            <p>User not found</p>

        )}
    </>
     )
    } else {
      return  (
      <img src={spinner} alt="Loading..." className="mx-auto my-auto"/>  
      )
    }
}


export default UsersProfile