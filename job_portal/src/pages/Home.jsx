import React from 'react'
import TrueFocus from '/src/TextAnimations/TrueFocus/TrueFocus.jsx';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ballpit from '/src/Backgrounds/Ballpit/Ballpit.jsx'

const Home = () => {
    
    return (
        <div>
            <div className="hero-container is-size-1 has-text-weight-bold roboto">
                <TrueFocus
                    sentence="Jobshala India"
                    manualMode={false}
                    blurAmount={2}
                    borderColor="green"
                    animationDuration={1}
                    pauseBetweenAnimations={1}
                />
                <div className="search-container">
                    <div className="search-box">
                        <input class="input is-rounded is-medium" type="text" placeholder="Search Jobs" />
                        <button class="button-icon">
                            <span class="icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </span>
                            <span>Find</span>
                        </button>
                    </div>
                    <div className="hero-animation">
                        <iframe src="https://lottie.host/embed/0c0f1f87-db01-463b-9071-f3ff148322f9/zSZSqJd6mn.lottie"></iframe>
                    </div>
                </div>
            </div>
            <div className="home-container">
                <div className='home-cards'>
                    <div className="image-container1">
                        <img className="hero-image1" src="src/assets/job-interview-candidate-selection-employment.jpg" alt="" />
                        <div className="content">
                            <span>Find Your Dream Job Here.</span>
                            <button className='button-big'>Browse Job</button>
                        </div>
                    </div>
                    <div className="image-container1">
                        <img className="hero-image1" src="src/assets/smiling-young-businesswoman-showing-contract-partner.jpg" alt="" />
                        <div className="content2">
                            <span>Register as HR</span>
                            <button className='button-big'>HR Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ball" style={{ position: 'relative' }}>
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
                    <Ballpit
                        count={50}
                        gravity={1}
                        friction={1}
                        wallBounce={1}
                        followCursor={true}
                    />
                </div>
                <span className="font-subheading" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '4rem',
                    fontWeight: 'bold',
                    color: 'white', // Adjust as needed for contrast
                    zIndex: 10
                }}>
                    Happy Working
                </span>
            </div>


        </div>
    )
}

export default Home