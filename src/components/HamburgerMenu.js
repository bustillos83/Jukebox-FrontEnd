import './Hamburger.css'
import Login from './Login'
import SignUp from './SignUp'

export default function HamburgerMenu({setOpen}) {
    return (
        <>
            <div className="hamburger-links">
                <Login />
                <SignUp />
                </div>
        </>
    )
}


