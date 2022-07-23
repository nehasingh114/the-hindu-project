import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../Component/common.css'
export const SingleNews = () => {
    const [saved, setSaved] = useState(false)
    let a = JSON.parse(localStorage.getItem("SingleNews"))
    const handleSaved = async (id, heading, title, el) => {
        let promise = await fetch("http://localhost:8080/SavedData", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                id: id,
                Heading: heading,
                description: el.description,
                title: title,
                urlToImage: el.urlToImage,
                publishedAt: el.publishedAt,
            })
        })
        setSaved(true)
    }
    const handleRemove = async (id) => {
        let promise = await fetch(`http://localhost:8080/SavedData/${id}`, {
            method: "DELETE",
        })
        setSaved(false)
    }
    let content = ""
    for (let i = 0; i < a.el.content.length - 15; i++) {
        content += a.el.content[i]
    }
    return (
        <div className='MainNewsFirstDiv'>
            <div className='pointer MainNewsFirstH2'>{a.heading}</div>
            <h2 className='pointer MainNewsFirstDes'>{a.title}</h2>
            <img className='pointer MainNewsFirstImg' src={a.el.urlToImage} alt="" />
            <div className='MainNewsTimeFirstDiv'>
                <div className='MainNewsFirstPubDate'>Updated on {a.month} {a.date}, {a.year} {a.hour}:{a.min} {a.zone} IST</div>
                <div>
                    <i style={{ padding: "10px 12px", fontSize: "22px", color: "#2f2f2f" }} class="fa-solid fa-share-nodes"></i>
                    {saved ? <i onClick={() => handleRemove(a.id)} style={{ padding: "10px 0px 10px 13px", fontSize: "22px", color: "#2f2f2f" }} class="fas fa-bookmark"></i> : <i onClick={() => handleSaved(a.id, a.heading, a.title, a.el)} style={{ padding: "10px 0px 10px 13px", fontSize: "22px", color: "#2f2f2f" }} class="fa-regular fa-bookmark"></i>}
                </div>
            </div>
            <div style={{ marginBottom: "20px" }}>{content}</div>
            <div style={{ marginBottom: "20px" }}>Any inspiring story speaks to those who seek motivation. And on World Athletics Day, which is celebrated around this time in May every year, some popular sportspersons choose the tales of grit and glory, outside the field they chose to pursue. These narratives serve as a stimulus for them to strive harder and achieve bigger dreams, pushing the boundaries of their own sport. Read who inspires them in their journey, and how!</div>
            <div style={{ marginBottom: "20px" }}>Hima Das, 22, sprinter, scripted history in 2018 by becoming the first Indian athlete to win a medal at any track event at the World Athletics Championships, junior or senior, and says, “One athlete that I draw my inspiration from is Sachin Tendulkar! His dedication and passion towards his sport have always been impeccable. Even after he put his bat down, he has kept himself associated with the sport and that is something I would like to do as well in the future. I would like to thank Sachin sir for being a role model to not just me but to generations of athletes who he has motivated to do better each day. As I continue to learn from his incredible journey, I hope one day, I’ll inspire the aspiring athletes just like I was inspired by him.”</div>
        </div>
    )
}
