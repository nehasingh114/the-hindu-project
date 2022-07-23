import React, { useState } from 'react'
import '../Component/common.css'
import { MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Component/styles'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
export const OtherNewsComponents = ({ el, title, month, date, year, hour, min, zone, heading, id }) => {
    const [saved, setSaved] = useState(false)
    const handleSaved = async () => {
        let promise = await fetch("http://localhost:8080/SavedData", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: id,
                Heading: heading,
                description: el.description,
                title: el.title,
                urlToImage: el.urlToImage,
                publishedAt: el.publishedAt,
            })
        })
        setSaved(true)
    }
    const handleRemove = async () => {
        let promise = await fetch(`http://localhost:8080/SavedData/${id}`, {
            method: "DELETE",
        })
        setSaved(false)
    }
    const dispatch = useDispatch({})
    const handleSingleNews = async () => {

        let obj = {
            el: el,
            title: title,
            month: month,
            date: date,
            year: year,
            hour: hour,
            min: min,
            zone: zone,
            heading: heading,
            id: id
        }
        localStorage.setItem("SingleNews", JSON.stringify(obj))
        let promise = await fetch("http://localhost:8080/History", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(obj)
        })
    }
    return (
        <MainNewsDiv className='MainNewsDiv'>
            <div>
                <MainNewsH2 className='pointer'>{heading}</MainNewsH2>
                <Link to="/SingleNews">
                    <MainNewsDes onClick={handleSingleNews} className='pointer'>{title}</MainNewsDes>
                </Link>
                <MainNewsTimeDiv>
                    <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                    <div>
                        <i style={{ padding: "10px 12px", fontSize: "22px", color: "#2f2f2f" }} class="fa-solid fa-share-nodes"></i>
                        {saved ? <i onClick={handleRemove} style={{ padding: "10px 0px 10px 13px", fontSize: "22px", color: "#2f2f2f" }} class="fas fa-bookmark"></i> : <i onClick={handleSaved} style={{ padding: "10px 0px 10px 13px", fontSize: "22px", color: "#2f2f2f" }} class="fa-regular fa-bookmark"></i>}
                    </div>
                </MainNewsTimeDiv>
            </div>
            <div>
                <Link to="/SingleNews">
                    <MainNewsImg onClick={handleSingleNews} className='pointer' src={el.urlToImage} alt="" />
                </Link>
            </div>
        </MainNewsDiv>
    )
}
