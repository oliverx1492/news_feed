import { useForm } from "react-hook-form"
import { InputContext } from "../context/InputContext"
import { useContext } from "react"


const Search = () => {

    const {input} = useContext(InputContext)
    const {setInput} = useContext(InputContext)


    const { register, handleSubmit } = useForm()

    const onSubmit = async (input) => {
        console.log(input.input)
        setInput(input.input)

    }

    return (


        <div className=" p-4 flex flex-col w-full h-96 justify-center items-center">
           OUTPUT: {input}
            <p className="p-5">Suche nach Artikel</p>

            {/* Search bar */}
            <form onSubmit={handleSubmit(onSubmit)} className=" flex items-center p-4 w-2/3 h-1/3">

                <input {...register("input")} type="text" className="w-full h-3/4 p-2 m-2 rounded-lg border border-gray-200 focus:outline-none focus:ring focus:ring-indigo-600 " />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>

            </form>


        </div>
    )
}

export default Search