import { useForm } from "react-hook-form"
import { InputContext } from "../context/InputContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



const Search = () => {

    const { input } = useContext(InputContext)
    const { setInput } = useContext(InputContext)
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (input) => {
        console.log(input)

        //check input

        if (input.input) {
            setInput(input)
            navigate("/result")
        }

        else {
            console.log("NICHT KORREKT")
        }



    }

    return (


        <div className=" p-4 flex flex-col w-full h-96 justify-center items-center">


            <p className="text-6xl font-extrabold text-indigo-600 ">myNEWS</p>

            {/* Search bar */}
            <form onSubmit={handleSubmit(onSubmit)} className=" flex items-center p-4 md:w-2/3 w-full h-1/3">

                <input {...register("input")} type="text" className=" shadow-md w-full h-3/4 p-2 m-2 
                rounded-lg border
                 border-gray-200 focus:outline-none focus:ring focus:ring-indigo-600 "
                    placeholder="Suche nach Artikeln..." />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-8 transition-transform duration-700 ease-in-out transform 
                        hover:scale-150" >
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>

            </form>

        
               
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">
                <p className="m-4">Sprache: </p>
                    <select {...register("language")} className="block appearance-none w-full bg-white border border-gray-300
                     text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2
                      focus:ring-indigo-600 focus:border-indigo-600">
                        <option value="de">Deutsch</option>
                        <option value="en">Englisch</option>
                    </select>
                </form>


        </div>
    )
}

export default Search