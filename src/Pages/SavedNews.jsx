import React, { useEffect, useState } from 'react'
import {MainNewsDes, MainNewsDiv, MainNewsH2, MainNewsImg, MainNewsPubDate, MainNewsTimeDiv } from '../Component/styles'
import '../fontawesome-free-6.0.0-web/css/all.css'
import { MainNewsContainerStyle } from '../Component/styles'
import '../Component/common.css'
import { FindMonth } from '../Redux/Action'
export const SavedNews = () => {
    const [data,setData]  = useState([])
    const CallData = async()=>{
        let promise = await fetch("http://localhost:8080/SavedData");
        let d = await promise.json();
        setData(d)
    }
    useEffect(()=>{
        CallData()
    },[])
    const handleRemove=async(id)=>{
        let promise2 = await fetch(`http://localhost:8080/SavedData/${id}`,{
            method:"DELETE",
        })
        let promise = await fetch("http://localhost:8080/SavedData");
        let d = await promise.json();
        setData([...d])
    }
    
    let count=0;
  return (
    <MainNewsContainerStyle>
        <div style={{display:"flex",alignItems:"center",marginBottom:"20px"}}>
            <div className='headingLineDiv headingLineTop'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>

            <div style={{fontSize:"20px",fontWeight:"bold",textAlign:"center",width:"40%"}}><span className='bracketHome'>[</span>SAVED NEWS<span className='bracketHome'>]</span></div>

            <div className='headingLineDiv headingLineTop'>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
                <div className='headingLine'></div>
            </div>
        </div>
        {data.map((el,i)=>{
            if(el.description && el.urlToImage){
                if(el.description[0]!=="<"){
                    let year = ""
            let month ="";
            let date = "";
            let hour=""
            let min=""
            for(let i=0;i<4;i++){
               year+= el.publishedAt[i]
            }
            for(let i=5;i<7;i++){
               month+= el.publishedAt[i]
            }
            for(let i=8;i<10;i++){
               date+= el.publishedAt[i]
            }
            for(let i=11;i<13;i++){
               hour+= el.publishedAt[i]
            }
            for(let i=14;i<16;i++){
               min+= el.publishedAt[i]
            }
            hour  = +hour
            let zone=""
            if(hour>12){
                zone = "PM"
            }
            else{
                zone = "AM"
            }
            if(hour===12 || hour===24 || hour===0){
                hour=12
              }
            else{
                hour = hour%12
            }
            let des = ""
            if(el.description){
                if(el.description.length>77){
                    for(let i=0;i<72;i++){
                        if(el.description[i]==="<"){
                            return
                          }
                        des+=el.description[i]
                    }
                    des+="..."
                }
                else{
                    des = el.description
                }
            }
            let title = ""
            let flag = true;
        for(let i=0;i<el.title.length;i++){
            if(el.title[i]==="-"){
                flag = false
            }
            if(flag){
                title+=el.title[i]
            }
        }
            month = +month
            month = FindMonth(month)
            count++;
                return(
                    <MainNewsDiv className='MainNewsDiv'>
                        <div>
                            <MainNewsH2 className='pointer'>{el.Heading}</MainNewsH2>
                            <MainNewsDes className='pointer'>{title}</MainNewsDes>
                            <MainNewsTimeDiv>
                                <MainNewsPubDate>Updated on {month} {date}, {year} {hour}:{min} {zone} IST</MainNewsPubDate>
                                <div>
                                    <i style={{padding:"10px 12px",fontSize:"22px",color:"#2f2f2f"}} class="fa-solid fa-share-nodes"></i>
                                    <i onClick={()=>handleRemove(el.id)} style={{padding:"10px 0px 10px 13px",fontSize:"22px",color:"#2f2f2f"}} class="fas fa-bookmark"></i>
                                </div>
                            </MainNewsTimeDiv>
                        </div>
                        <div>
                            <MainNewsImg className='pointer' src={el.urlToImage} alt="" />
                        </div>
                    </MainNewsDiv>
                )
            
                }
            }
        })}
    </MainNewsContainerStyle>
  )
}
