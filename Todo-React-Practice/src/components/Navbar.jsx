import logo from '.././assets/logo.png'

const Navbar = () => {

    // const activeNav = ""

    const navList = ["Dashboard", "Completed", "Pending", "Missed"]

  return (
    <div className="flex justify-between items-center backdrop-blur-sm mx-auto px-3 rounded-lg w-[70vw] h-16 sticky top-2">
        <h1><img src={logo} alt="I todo" className='w-20 bg-cover'/></h1>
        <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4">
                {
                    navList.map(item =>
                        <li className="py-1 bg border-b-3 border-neutral-600 font-semibold text-neutral-600">{item}</li>
                    )
                }
                
            </ul>
            <button className="px-3 bg-amber-200 py-[.4rem] font-semibold rounded-sm">Subscribe</button>
            <button>Login</button>
        </div>
    </div>

  )
}

export default Navbar