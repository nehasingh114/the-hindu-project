import React, { useEffect, useState } from 'react'
import { MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Component/styles'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { MainNewsContainerStyle } from '../Component/styles'
import '../Component/common.css'
import { FindMonth } from '../Redux/Action'
import { OtherNewsComponents } from './OtherNewsComponents'
import { FirstNewsComponent } from './FirstNewsComponent'
export const Latest = () => {
    const [data, setData] = useState([])
    const CallData = async () => {
        let promise = await fetch("https://newsapi.org/v2/everything?q=latest&apiKey=81cd23c204f349be81345237249f7737");

        let d = await promise.json();
        setData(d.articles)
    }
    useEffect(() => {
        CallData()
    }, [])
    let count = 0;

    return (
        <MainNewsContainerStyle>
            <div style={{ margin: "20px 10px 10px", fontSize: "16px", fontWeight: "500", color: "#424242" }}><span style={{ color: "#00b1cd" }}>Home</span> / Latest News</div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <div className='headingLineDiv headingLineMainLatest'>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                </div>

                <div style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center", width: "50%" }}><span className='bracketHome'>[</span>LATEST NEWS<span className='bracketHome'>]</span></div>

                <div className='headingLineDiv headingLineMainLatest'>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                    <div className='headingLine'></div>
                </div>
            </div>
            {data.map((el, i) => {
                if (el.description && el.urlToImage) {
                    if (el.description[0] !== "<") {
                        let year = ""
                        let month = "";
                        let date = "";
                        let hour = ""
                        let min = ""
                        for (let i = 0; i < 4; i++) {
                            year += el.publishedAt[i]
                        }
                        for (let i = 5; i < 7; i++) {
                            month += el.publishedAt[i]
                        }
                        for (let i = 8; i < 10; i++) {
                            date += el.publishedAt[i]
                        }
                        for (let i = 11; i < 13; i++) {
                            hour += el.publishedAt[i]
                        }
                        for (let i = 14; i < 16; i++) {
                            min += el.publishedAt[i]
                        }
                        hour = +hour
                        let zone = ""
                        if (hour > 12) {
                            zone = "PM"
                        }
                        else {
                            zone = "AM"
                        }
                        if (hour === 12 || hour === 24 || hour === 0) {
                            hour = 12
                        }
                        else {
                            hour = hour % 12
                        }
                        let des = ""
                        if (el.description) {
                            if (el.description.length > 77) {
                                for (let i = 0; i < 72; i++) {
                                    if (el.description[i] === "<") {
                                        return
                                    }
                                    des += el.description[i]
                                }
                                des += "..."
                            }
                            else {
                                des = el.description
                            }
                        }
                        month = +month
                        month = FindMonth(month)
                        count++;
                        let title = ""
                        let flag = true;
                        for (let i = 0; i < el.title.length; i++) {
                            if (el.title[i] === "-") {
                                flag = false
                            }
                            if (flag) {
                                title += el.title[i]
                            }
                        }

                        if (count === 1) {
                            return (
                                <FirstNewsComponent el={el} title={title} month={month} date={date} year={year} hour={hour} min={min} zone={zone} heading={"LATEST NEWS"} id={800 + i} />
                            )
                        }
                        else {
                            return (
                                <OtherNewsComponents el={el} title={title} month={month} date={date} year={year} hour={hour} min={min} zone={zone} heading={"LATEST NEWS"} id={800 + i} />
                            )
                        }
                    }
                }
            })}
        </MainNewsContainerStyle>
    )
}
