import { Link } from "react-router-dom"


const Header = () => {


    return (
        <div className="bg-indigo-600 w-full p-4 flex justify-center">
            <Link to="/"><p className="p-4 text-5xl font-extrabold text-white ">myNEWS</p></Link>
        </div>
    )
}

export default Header