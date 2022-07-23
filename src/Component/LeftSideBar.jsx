import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LeftSideBarAction } from '../Redux/Action'
import './LeftSideBar.css'

import { LeftSideBarComponent } from './LeftSideBarComponent'
export const LeftSideBar = ({ flag }) => {
    const dispatch = useDispatch()
    return (
        <div id={flag ? 'LeftSideBarMain' : "LeftSideBarMainHide"}>
            <div id="LeftSideBarDiv1">
                <div id="LeftSideBarLogo">
                    <img src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="" />
                </div>
                <div id="LeftSideBarTemp">
                    <div>New Delhi</div>
                    <div>temp</div>
                </div>
                <div id="LeftSideBarCross">
                    <i onClick={() => dispatch(LeftSideBarAction(false))} class="fas fa-times"></i>
                </div>
            </div>
            <div id="LeftSideBarDiv2">
                <div className="StaticDataSideBar">Home</div>
                <div className={"StaticDataSideBar"}>India News</div>
                <LeftSideBarComponent Name={"Entertainment"} Options={["Bollywood", "Tv", "Web Series", "Music", "Hollywood", "Tamil Cinema"]} />
                <LeftSideBarComponent Name={"IPL 2022"} Options={["Overviews", "News", "Points Table", "Schedule", "Team", "Results", "Orange Cup", "Purple Cup", "IPL History"]} />
                <LeftSideBarComponent Name={"Elections"} Options={["Uttar Pardesh", "Punjab", "Uttarkhand", "Goa", "Manipur"]} />
                <LeftSideBarComponent Name={"Cities"} Options={["Delhi", "Mumbai", "Bangalur", "Gurugram", "Noida", "Hyderabad", "Chennai", "Kolkata", "Bhopal", "Chandigarh", "Dehradun", "Indore", "Lucknow", "Patna", "Pune", "Ranchi", "Other Cities"]} />

                <div className={"StaticDataSideBar"}>World News</div>
                <LeftSideBarComponent Name={"Life Style"} Options={["Fashion", "Health", "Relationship", "Art And Culture", "Travel", "Recipes", "Festivals", "Brunch"]} />
                <div className={"StaticDataSideBar"}>Trending</div>
                <LeftSideBarComponent Name={"Education"} Options={["Exam Result", "Competitive Exam", "Board Exam", "Admission News", "Employment News"]} />
                <LeftSideBarComponent Name={"Astrology"} Options={["Horoscope", "Festive Calender", "Compatibility Calculation"]} />
                <div className={"StaticDataSideBar"}>Opinion</div>
                <div className={"StaticDataSideBar"}>Analysis</div>
                <LeftSideBarComponent Name={"Videos"} Options={["Explainer Videos", "On The Records", "HT Weekend", "Aur Batao", "Vikram Chandra Daily Wrap"]} />
                <LeftSideBarComponent Name={"Photos"} Options={["Entertainment Photos", "Lifestytles Photos", "News Photos"]} />
                <LeftSideBarComponent Name={"Sports"} Options={["Euro 2020", "Hockey", "Football"]} />
                <div className={"StaticDataSideBar"}>Web Stories</div>
                <div className={"StaticDataSideBar"}>Business</div>
                <div className={"StaticDataSideBar"}>Science</div>
                <LeftSideBarComponent Name={"HT insight"} Options={["Public Health", "Economic Policy", "International Affairs", "Climate Change", "Gender Equality"]} />
                <div className={"StaticDataSideBar"}>CricHT Fantacy</div>
                <LeftSideBarComponent Name={"Games"} Options={["Daily Sudoku", "Daily Crossword", "Daily Word Jumble"]} />
                <div className={"StaticDataSideBar"}>Quiz</div>
                <div className={"StaticDataSideBar"}>Podcasts</div>
                <div className={"StaticDataSideBar"}>Auto</div>
                <div className={"StaticDataSideBar"}>HT Tech</div>
                <div className={"StaticDataSideBar"}>HT Bangla</div>
                <div className={"StaticDataSideBar"}>HT School</div>
                <div className={"StaticDataSideBar"}>HT Brand Stories</div>
                <div className={"StaticDataSideBar"}>HT Friday Finance</div>
                <div className={"StaticDataSideBar"}>HT Shop</div>
            </div>
            <div id="LeftSideBarDiv3">
                <div>
                    <div>My Account</div>
                    <div>Saved Articles</div>
                </div>
                <div>
                    <div>Sign out</div>
                    <div>
                        <img style={{ width: "25px" }} src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
                        <img style={{ width: "25px" }} src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg" alt="" />
                        <img style={{ width: "25px", color: "white" }} src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
