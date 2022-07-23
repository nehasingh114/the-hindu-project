import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../fontawesome-free-6.0.0-web/css/all.css'
import styles from "../Pages/New_page.module.css"

function New_page({ closemodel }) {
    const [isActive, setisActive] = useState(false)
    return (
        <div id={styles.Side}>
            <div className={styles.container}>
                <button onClick={() => closemodel(false)}>X</button>
                <div className={styles.imgdiv}>
                    <img style={{ width: "50px", marginTop: "-5px" }} src="https://www.hindustantimes.com/res/images/icons/icon-72x72.png" alt="logo" />
                    <div className={styles.weather}> <p>New Delhi 350 C<span style={{ marginLeft: "5px" }}><i class="fa-solid fa-cloud-sun"></i></span> Friday, May 06, 2022</p></div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.modelnew_page}>
                    <div className={styles.model1}>
                        <h3>Home</h3>
                        <h3>India News</h3>
                        <div className={styles.ent}>
                            <label htmlFor=""><h3>Entertainment</h3>
                                <div className={styles.over}>
                                    {isActive && (
                                        <div>
                                            <h4><li>Bollywood</li></h4>
                                            <h4><li>Tv</li></h4>
                                            <h4><li>Web Series</li></h4>
                                            <h4><li>Music</li></h4>
                                            <h4><li>Hollywood</li></h4>
                                            <h4><li>Hollywood</li></h4>
                                            <h4><li>Tamil Cinema</li></h4>
                                        </div>
                                    )}
                                </div>
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "45px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <div className={styles.ipl}>
                            <label><h3>IPL 2022</h3>
                                {isActive && (
                                    <div className={styles.over}>
                                        <h4><li>Overviews</li></h4>
                                        <h4><li>News</li></h4>
                                        <h4><li>Ponits Table</li></h4>
                                        <h4><li>Schedule</li></h4>
                                        <h4><li>Team</li></h4>
                                        <h4><li>Results</li></h4>
                                        <h4><li>Orange Cup</li></h4>
                                        <h4><li>Purple Cup</li></h4>
                                        <h4><li>IPL History</li></h4>
                                    </div>
                                )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>

                        </div>
                        <div className={styles.ele}>
                            <label htmlFor=""><h3>Elections</h3>{isActive && (
                                <div className={styles.over}>
                                    <h4><li>Uttar Pardesh</li></h4>
                                    <h4><li>Punjab</li></h4>
                                    <h4><li>Uttarkhand</li></h4>
                                    <h4><li>Goa</li></h4>
                                    <h4><li>Manipu</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <div className={styles.cities}>
                            <label htmlFor=""><h3>Cities</h3>{isActive && (
                                <div className={styles.over}>
                                    <h4><li>Delhi</li></h4>
                                    <h4><li>Mumbai</li></h4>
                                    <h4><li>Bangalur</li></h4>
                                    <h4><li>Gurugram</li></h4>
                                    <h4><li>Noida</li></h4>
                                    <h4><li>Hyderabad</li></h4>
                                    <h4><li>Chennia</li></h4>
                                    <h4><li>Kolkata</li></h4>
                                    <h4><li>Bhopal</li></h4>
                                    <h4><li>Chandigarh</li></h4>
                                    <h4><li>Dehradun</li></h4>
                                    <h4><li>Indore</li></h4>
                                    <h4><li>Lucknow</li></h4>
                                    <h4><li>Patna</li></h4>
                                    <h4><li>Pune</li></h4>
                                    <h4><li>Ranchi</li></h4>
                                    <h4><li>Other Cities</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <h3>World News</h3>
                        <div className={styles.life}>
                            <label htmlFor=""><h3>Life Style</h3> {isActive && (
                                <div className={styles.over}>
                                    <h4><li>Fashion</li></h4>
                                    <h4><li>Health</li></h4>
                                    <h4><li>Relationship</li></h4>
                                    <h4><li>Art And Culture</li></h4>
                                    <h4><li>Travel</li></h4>
                                    <h4><li>Recipes</li></h4>
                                    <h4><li>Festivals</li></h4>
                                    <h4><li>Brunch</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <h3>Tranding</h3>
                        <div className={styles.education}>
                            <label htmlFor=""><h3>Education</h3>{isActive && (
                                <div className={styles.over}>
                                    <h4><li>Exam Result</li></h4>
                                    <h4><li>Competitive Exam</li></h4>
                                    <h4><li>Board Exam</li></h4>
                                    <h4><li>Admission News</li></h4>
                                    <h4><li>Employment News</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <div className={styles.astrology}>
                            <label htmlFor=""><h3>Astrology</h3>  {isActive && (
                                <div className={styles.over}>
                                    <h4><li>Horoscope</li></h4>
                                    <h4><li>Festive Calender</li></h4>
                                    <h4><li>Compatibility Calculation</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <h3>Opinion</h3>
                        <h3>Analysis</h3>
                        <div className={styles.videos}>
                            <label htmlFor=""><h3>Videos</h3> {isActive && (
                                <div className={styles.over}>
                                    <h4><li>Explainer Videos</li></h4>
                                    <h4><li>On The Records</li></h4>
                                    <h4><li>HT Weekend</li></h4>
                                    <h4><li>Aur Batao</li></h4>
                                    <h4><li>Vikram Chandra Daily Wrap</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <div className={styles.photos}>
                            <label htmlFor=""><h3>Photos</h3> {isActive && (
                                <div className={styles.over}>
                                    <h4><li>Entertainment Photos</li></h4>
                                    <h4><li>Lifestytles Photos</li></h4>
                                    <h4><li>News Photos</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={() => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <div className={styles.sports}>
                            <label htmlFor=""><h3>Sports</h3>{isActive && (
                                <div className={styles.over}>
                                    <h4><li>Euro 2020</li></h4>
                                    <h4><li>Hockey</li></h4>
                                    <h4><li>Football</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={(e) => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <h3>Web Stories</h3>
                        <h3>Business</h3>
                        <h3>Science</h3>
                        <div className={styles.Ht}>
                            <label htmlFor=""><h3>HT insight</h3>{isActive && (
                                <div className={styles.over}>
                                    <h4><li>Public Health</li></h4>
                                    <h4><li>Economic Policy</li></h4>
                                    <h4><li>International Affairs</li></h4>
                                    <h4><li>Climate Change</li></h4>
                                    <h4><li>Gender Equality</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={(e) => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <h3>CricHT Fantasy</h3>
                        <div className={styles.games}>
                            <label htmlFor=""><h3>Games</h3> {isActive && (
                                <div className={styles.over}>
                                    <h4><li>Daily Sudoku</li></h4>
                                    <h4><li>Daily Crossword</li></h4>
                                    <h4><li>Daily Word Jumble</li></h4>
                                </div>
                            )}
                            </label>
                            <div onClick={(e) => setisActive(!isActive)} style={{ color: "white", width: "30px", height: "30px", marginLeft: "70px" }}><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                        <div className={styles.ahref}>
                            <a href="https://www.hindustantimes.com/?quiz=1&quiz-url=/cahtind/home"><h3>Quiz</h3></a>
                            <a href="https://www.htsmartcast.com/publisher/hindustan-times-ht-smartcast/"><h3>Podcasts</h3></a>
                            <a href="https://auto.hindustantimes.com/"><h3>Auto</h3></a>
                            <a href="https://tech.hindustantimes.com/"><h3>HT Tech</h3></a>
                            <a href="https://bangla.hindustantimes.com/"><h3>HT Bangla</h3></a>
                            <a href="https://htschool.hindustantimes.com/"><h3>HT School</h3></a>
                            <a href="http://www.htbrandstudio.com/platforms/hindustan-times/"><h3>HT Brand Stories</h3></a>
                            <a href="https://www.hindustantimes.com/brandstories/friday-finance/"><h3>HT Friday Finance</h3></a>
                            <a href="https://shop.hindustantimes.com/"><h3>HT Shop</h3></a>
                        </div>
                    </div>
                    <div className={styles.expolerdiv}>
                        <h3 style={{ color: "#34687B", }}>EXPLORE HINDUSTAN TIMES</h3>
                        <a href="https://www.hindustantimes.com/subscribe-newsletter"><h3>HT Newsletters</h3></a>
                        <a href=""><h3>Weather Today</h3></a>
                        <a href="https://www.htmedia.in/hindustantimes-com"><h3>About Us</h3></a>
                        <a href=""><h3>Contact Us</h3></a>
                        <a href=""><h3>Privacy Police</h3></a>
                        <a href=""><h3>Terms of Use</h3></a>
                        <a href=""><h3>Subscription Terms of Use</h3></a>
                        <a href=""><h3>Disclaimer</h3></a>
                        <a href=""><h3>Print Ad Rates</h3></a>
                        <a href=""><h3>Code of Ethics</h3></a>
                        <a href=""><h3>Sitemap</h3></a>
                        <a href=""><h3>RSS Feeds</h3></a>
                    </div>
                    <div className={styles.ptag}>
                        <p style={{}}>Copyright © HT Digital Streams Ltd. All rights reserved.</p>
                    </div>
                </div>
                <div className={styles.sign}>
                    <h3>Sign in</h3>
                    <div className={styles.facebook}>
                        <a href="https://www.facebook.com/hindustantimes"><img style={{ width: "50px", height: "50px" }} src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" /></a>
                    </div>
                    <div className={styles.tw}>
                        <a href="https://twitter.com/htTweets"><img style={{ width: "50px" }} src="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg" alt="" /></a>
                    </div>
                    <div className={styles.ink}>
                        <a href="https://www.linkedin.com/company/hindustantimes/"><img style={{ width: "50px", color: "white" }} src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_1280.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default New_page