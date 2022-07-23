import React, { useEffect, useState } from 'react'
import { MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Component/styles'
import '../Component/common.css'
import { Link } from 'react-router-dom'
import { OtherNewsComponents } from './OtherNewsComponents'
export const History = () => {
    const [saved, setSaved] = useState(false)
    const handleSaved = async (el) => {
        let promise = await fetch("http://localhost:8080/SavedData", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: el.id,
                Heading: el.heading,
                description: el.description,
                title: el.title,
                urlToImage: el.urlToImage,
                publishedAt: el.publishedAt,
            })
        })
        setSaved(true)
    }
    const handleRemove = async (el) => {
        let promise = await fetch(`http://localhost:8080/SavedData/${el.id}`, {
            method: "DELETE",
        })
        setSaved(false)
    }
    const handleSingleNews = async (el) => {

        let obj = {
            el: el.el,
            title: el.title,
            month: el.month,
            date: el.date,
            year: el.year,
            hour: el.hour,
            min: el.min,
            zone: el.zone,
            heading: el.heading,
            id: el.id
        }
        localStorage.setItem("SingleNews", JSON.stringify(obj))
    }
    const [data, setData] = useState([])
    const CallData = async () => {
        const history = await fetch("http://localhost:8080/History")
        const d = await history.json()
        setData(d)
    }
    useEffect(() => {
        CallData()
    }, [])
    return (
        <div>
            {data.map((el) => {
                return (
                    <>
                        <OtherNewsComponents el={el.el} title={el.title} month={el.month} date={el.date} year={el.year} hour={el.hour} min={el.min} zone={el.zone} heading={el.heading} id={el.id} />
                    </>
                    // <OtherNewsComponents />
                    // <MainNewsDiv className='MainNewsDiv'>
                    //     <div>
                    //         <MainNewsH2 className='pointer'>{el.heading}</MainNewsH2>
                    //         <Link to="/SingleNews">
                    //             <MainNewsDes onClick={() => handleSingleNews(el)} className='pointer'>{el.title}</MainNewsDes>
                    //         </Link>
                    //         <MainNewsTimeDiv>
                    //             <MainNewsPubDate>Updated on {el.month} {el.date}, {el.year} {el.hour}:{el.min} {el.zone} IST</MainNewsPubDate>
                    //             <div>
                    //                 <i style={{ padding: "10px 12px", fontSize: "22px", color: "#2f2f2f" }} class="fa-solid fa-share-nodes"></i>
                    //                 {saved ? <i onClick={() => handleRemove(el)} style={{ padding: "10px 0px 10px 13px", fontSize: "22px", color: "#2f2f2f" }} class="fas fa-bookmark"></i> : <i onClick={() => handleSaved(el)} style={{ padding: "10px 0px 10px 13px", fontSize: "22px", color: "#2f2f2f" }} class="fa-regular fa-bookmark"></i>}
                    //             </div>
                    //         </MainNewsTimeDiv>
                    //     </div>
                    //     <div>
                    //         <MainNewsImg onClick={handleSingleNews} className='pointer' src={el.el.urlToImage} alt="" />
                    //     </div>
                    // </MainNewsDiv>
                )
            })}
        </div>
    )
}
