import logo from "../images/logo.svg"
export default function Header(){
    return (
        <nav className="nav-bar">
            <img src={logo} className="logo"/>
        </nav>
    )
}