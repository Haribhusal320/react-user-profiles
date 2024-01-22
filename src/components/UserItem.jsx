import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

function UserItem({user: { name, picture}}) {
  return (
    <div className=" card  compact bg-base-300 shadow-xl mt-2 ">
      <div className='flex-row items-center card-body'>
        <div>
          <div className='avatar'>
            <div className=" rounded-full  w-14 h-14">
                <img src={picture.large} alt="profile"/>
            </div>
          </div>
        </div>

      <div>
        <h1 className="card-title">{name.first}</h1>
        <Link className="text-base-content opacity-50" to={`/user/${name.first}`}>
            Visit Profile
        </Link>
      </div>

      </div> 
    </div>

  )
}

  UserItem.propTypes = {
    user: PropTypes.object.isRequired
  }


export default UserItem
