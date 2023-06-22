import Image from 'next/image'
import React from 'react'
const aboutText=["我是一名学生是大地洒的撒点水","在绍兴文理学院","我是一名学生是大地洒的撒点水"]
const About = () => {
  return (
    <div className="about" id="about">
        <div className="title">
            <h2>
                关于我
            </h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                {
                    aboutText.map(text=>(
                        <div className="about-grid-info-text" key={text}>
                            {text}
                        </div>
                    ))
                    
                }
                <ul className="about-grid-info-list">
                    <li className="about-grid-info-list-item">React</li>
                    <li className="about-grid-info-list-item">Node.js</li>
                    <li className="about-grid-info-list-item">Vue</li>
                    <li className="about-grid-info-list-item">Java</li>
                    <li className="about-grid-info-list-item">C++</li>
                    <li className="about-grid-info-list-item">C#</li>
                </ul>
            </div>
            <div className="about-grid-photo">
                <div className="overlay"></div>
                <div className="overlay-border"></div>
                <div className="about-grid-photo-container">
                    <Image src="/ysy.gif" alt='profile' fill/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About