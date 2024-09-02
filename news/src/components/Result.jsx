import { InputContext } from "../context/InputContext"
import { useContext, useEffect, useState } from "react"
import Header from "./Header"


const Result = () => {

    const { input } = useContext(InputContext)

    const API_KEY = import.meta.env.VITE_API_KEY
   

    const [article, setArticle] = useState([])
    const [pag, setPag] = useState(5)
    const [noResult, setNoResult] = useState()

    useEffect(() => {
        fetchArticle()
    }, [])

    const fetchArticle = async () => {
        
        console.log("Fetching Article")
        const link = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${input.input}&language=${input.language}`
        const response = await fetch(link)

        if (response.ok) {
            const data = await response.json()
            console.log(data.results)

            setArticle(data.results)

            if(data.results.length == 0) {
                console.log("Keine Ergebnisse")
                setNoResult("Keine Suchergebnisse gefunden")
            }
        }

        else {
            console.log("Error aufgetreten")
        }
    }

    const redir = (link) => {
        window.open(link, "_blank")
    }

    const loadMore = () => {
        setPag(pag + 2)
    }


    return (
        <div>
            <Header />
            <div className=" p-4 flex flex-col w-full h-96 items-center">

                <p className="text-xl">Suchergebnisse zu {input.input}</p>
                <p className="p-4 m-4">{noResult}</p>
                {article && article.slice(0, pag).map((item, index) => (
                    <div key={index} onClick={() => redir(item.link)}
                        className=" border m-4 p-4 md:w-2/3 flex items-center shadow-md md:h-3/4 rounded-lg hover:border-indigo-200 
                transition-transform duration-400 ease-in-out transform 
                        hover:scale-105">
                        {item.image_url && <img className="xl:block hidden w-64 h-48 object-cover m-4" src={item.image_url} alt="Image_URL" />}
                        <div className="">
                            <p className="text-sm text-center text-indigo-700">{item.source_name}</p>
                            <p className="font-bold">{item.title}</p>
                            <p className="overflow-hidden">{item.description}</p>
                            <p className="text-sm">{item.pubDate.slice(5, 16)}</p>

                        </div>
                    </div>
                ))}

                <div className="p-4 m-4 cursor-pointer transition-transform duration-400 ease-in-out transform 
                        hover:scale-105" onClick={loadMore}>
                    {!noResult && <p>Mehr Artikel laden...</p>}
                </div>


            </div>
        </div>
    )
}

export default Result