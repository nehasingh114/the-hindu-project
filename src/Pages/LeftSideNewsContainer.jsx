import React, { useEffect, useState } from 'react'
import { LeftSideNewsContainerStyle, MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Component/styles'
import '../Component/common.css'
import { FindMonth } from '../Redux/Action'
export const LeftSideNewsContainer = () => {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const CallData = async () => {
        let promise = await fetch("https://newsapi.org/v2/top-headlines?country=in&page=2&apiKey=b66b09c463ac4dbe9df0657afa6c8a7b");
        let d = await promise.json();
        setData(d.articles)
        let promise2 = await fetch("https://newsapi.org/v2/everything?q=bollywood&apiKey=b66b09c463ac4dbe9df0657afa6c8a7b");
        let d2 = await promise2.json();
        // console.log('d2:', d2.articles)
        setData2(d2.articles)
    }
    useEffect(() => {
        CallData()
    }, [])
    let count = 0;
    let count2 = 0;
    return (
        <LeftSideNewsContainerStyle>
            <div id="div1">
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <div className='headingLineDiv headingLineLatest'>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                    </div>

                    <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center", width: "60%" }}><span style={{ color: "#00b1cd", fontSize: "20px" }}>[</span>LATEST NEWS<span style={{ color: "#00b1cd", fontSize: "20px" }}>]</span></div>

                    <div className='headingLineDiv headingLineLatest'>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                    </div>
                </div>
                {data.map((el, i) => {
                    if (count > 4) {
                        //   break;
                        console.log("1");
                        return;
                    }
                    if (el.description) {
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
                            if (hour > 11) {
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
                            if (el.description.length > 65) {
                                for (let i = 0; i < 60; i++) {
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
                            count++;
                            month = +month
                            month = FindMonth(month)
                            return (
                                <div className='LeftNewsDiv'>
                                    <div>
                                        <div className="LeftNewsDes pointer">{title}</div>
                                        <MainNewsTimeDiv>
                                            <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                                        </MainNewsTimeDiv>
                                    </div>
                                </div>
                            )
                        }

                    }
                })}
                <div className='ViewAll pointer'>View All <i class="fas fa-greater-than"></i></div>
            </div>
            <div id="div2">
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <div className='headingLineDiv headingLineBollywood'>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                    </div>

                    <div style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center", width: "60%" }}><span style={{ color: "#00b1cd", fontSize: "20px" }}>[</span>BOLLYWOOD<span style={{ color: "#00b1cd", fontSize: "20px" }}>]</span></div>

                    <div className='headingLineDiv headingLineLatest'>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                        <div className='headingLine'></div>
                    </div>
                </div>
                {data2.map((el, i) => {
                    if (count2 > 4) {
                        console.log("1");
                        return;
                    }
                    if (el.description) {
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
                            if (hour > 11) {
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
                            if (el.description.length > 65) {
                                for (let i = 0; i < 60; i++) {
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
                            count2++;
                            month = +month
                            month = FindMonth(month)
                            return (

                                <div className='LeftNewsDiv'>
                                    <MainNewsH2 className='pointer' style={{ fontSize: "16px", fontWeight: "bolder" }}>BOLLYWOOD</MainNewsH2>
                                    <div>
                                        <div className="LeftNewsDes pointer">{title}</div>
                                        <MainNewsTimeDiv>
                                            <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                                        </MainNewsTimeDiv>
                                    </div>
                                </div>
                            )
                        }
                    }
                })}
                <div className='ViewAll pointer'>View All <i class="fas fa-greater-than"></i></div>
            </div>
        </LeftSideNewsContainerStyle>
    )
}
