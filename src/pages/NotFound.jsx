import { Link } from "react-router-dom"
import homeIcon from '../Images/homeIcon.svg'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-between mb-4 gap-2 p-4 sm:p-8">
      <div className="font-bold text-4xl sm:text-8xl text-rose-900 text-center">
        Oops!
      </div>
      <h1 className="font-bold mb-4 sm:mb-8 text-2xl sm:text-5xl text-center">
        404 - PAGE NOT FOUND
      </h1>
      <Link to='/' className='btn btn-success btn-lg flex items-center space-x-2'>
        <img src={homeIcon} alt="home icon" width={25} height={25} />
        <span className="hidden sm:inline-block">BACK TO HOME</span>
      </Link>
    </div>
  )
}

export default NotFound;

