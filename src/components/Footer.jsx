import profile from '../Images/profile.png'

function Footer() {

const footerYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center bg-neutral p-4 text-white">
        <aside>
            <img src={profile} alt="Pic of user profile icon" className='w-20 h-20' />
            <h1 className="text-lg font-medium ">Users Profile Generator</h1>
            <p>Copyright &copy; {footerYear} Users Profile - All right reserved</p>   {/* &copy; is used to display © */}
            <p className='font-medium text-xl'>Designed by <span className='text-orange-500'>Hari Bhusal</span></p>
        </aside>

    </footer>
  )
}

export default Footer
