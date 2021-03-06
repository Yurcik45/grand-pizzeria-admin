import React from 'react';
import './MainLandHeader.sass'
import {HashLink as Link} from 'react-router-hash-link'

const MainLandHeader = props => {
    const navigationLinksArray = [
        {
            name: 'Головна',
            nameEN: 'Home',
            link: '/'
        },
        {
            name: 'Меню',
            nameEN: 'Menu',
            link: '/MenuItems'
        },
        {
            name: 'Відгуки',
            nameEN: 'FeedBack',
            link: '/FeedBack'
        },
        {
            name: 'Ми на карті',
            nameEN: 'Found Us',
            link: '/FoundUs'
        }
        ];
    return (
        <div id={'#top'} className="header">
            <div className="leftContent">
                <Link to="/" className='logoLink'>
                    <svg width="1001" height="788" viewBox="0 0 1001 788" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M474.656 696.089V554.168H422.292V632.225C322.631 599.11 250.672 505.172 250.672 394.338C250.672 264.919 348.644 158.479 474.656 145.3V92.5866C319.59 106.103 197.97 235.859 197.97 394.338C197.97 534.569 292.901 652.161 422.292 686.966C439.183 691.359 456.751 694.4 474.656 696.089Z"
                            fill="white"/>
                        <path
                            d="M53.3777 394.338C53.3777 379.47 41.2157 367.643 26.6888 367.643C12.162 367.643 0.337833 379.47 0 394.338C0 408.868 11.8242 420.695 26.6888 420.695C41.5535 420.695 53.3777 408.868 53.3777 394.338Z"
                            fill="white"/>
                        <path
                            d="M1001 392.31C1001 377.443 989.176 365.616 974.649 365.616C960.122 365.616 947.96 377.78 947.96 392.31C947.96 406.84 960.122 418.667 974.649 418.667C989.176 418.667 1001 406.84 1001 392.31Z"
                            fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M579.384 686.966V728.19C730.733 692.71 843.57 556.871 843.57 394.338C843.57 205.11 690.193 51.3619 500.669 51.3619C311.482 51.3619 157.768 204.772 157.768 394.338C157.768 574.78 297.293 722.784 474.318 736.3V788C268.577 774.484 106.08 603.503 106.08 394.338C106.417 176.726 283.104 0 500.669 0C718.571 0 895.258 176.726 895.258 394.338C895.258 585.256 759.787 744.41 579.384 780.904H579.046C562.155 784.283 544.587 786.648 526.682 788V92.9245C681.747 106.103 803.367 236.197 803.367 394.676C803.705 534.57 708.436 652.161 579.384 686.966ZM579.384 632.225V156.789C679.045 189.566 751.003 283.842 751.003 394.338C751.003 505.172 679.045 599.11 579.384 632.225Z"
                              fill="white"/>
                    </svg>
                    <p>GRANDE PIZZERIA</p>
                </Link>
                <div className="choiceLang" onClick={() => props.setLanguage(!props.language)}>
                    <p className='currentLang'>
                        {
                            (props.language === false) ?
                                'UA'
                                : 'EN'
                        }
                        {/*ua*/}
                    </p>
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.398025 0.882893C0.00750059 1.27342 0.00750044 1.90658 0.398025 2.29711L4.89381 6.79289C5.28434 7.18342 5.28434 7.81658 4.89381 8.20711L0.398025 12.7029C0.00750059 13.0934 0.00750029 13.7266 0.398024 14.1171L0.573811 14.2929C0.964335 14.6834 1.5975 14.6834 1.98802 14.2929L8.07381 8.20711C8.46434 7.81658 8.46434 7.18342 8.07381 6.79289L1.98803 0.707107C1.5975 0.316583 0.964335 0.316582 0.573811 0.707107L0.398025 0.882893Z"
                            fill="white"/>
                    </svg>
                    <p className='changeLang'>
                        {
                            (props.language === true) ?
                                'UA'
                                : 'EN'
                        }
                    </p>
                </div>
            </div>
            <div className="rightContent">
                <ul className='navigationLinks'>
                    {
                        navigationLinksArray.map(  ( links, id)  =>
                            <li key={id}>
                                <Link to={links.link}>
                                    {
                                        props.language ?
                                            `${links.nameEN}`
                                            : `${links.name}`
                                    }
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <div className="burgerMenu">
                    <svg
                        name='burger'
                        width="40" height="40" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 96H432V128H80V96Z" fill="white" />
                        <path d="M80 240H432V272H80V240Z" fill="white" />
                        <path d="M80 384H432V416H80V384Z" fill="white" />
                    </svg>
                </div>
                <Link to="#" className={'basket'}>
                    <svg className='uppPlate' width="36" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0016 5.19132L26.9078 7.08575C34.5503 12.1536 37.0139 22.394 32.3661 30.4443L31.8192 31.3915C31.5173 31.9144 30.848 32.0938 30.3251 31.7919L1.90864 15.3856C1.38578 15.0838 1.20643 14.4144 1.5083 13.8915L2.05518 12.9443C6.70306 4.89396 16.8033 1.90736 25.0134 5.992C24.9619 6.06583 26.1072 4.09757 26.1072 4.09757L24.2127 3.00382C23.6899 2.70195 23.5105 2.03259 23.8124 1.50973C24.1143 0.986868 24.7836 0.807515 25.3065 1.10939L30.9898 4.39064C31.5126 4.69252 31.692 5.36187 31.3901 5.88473C31.0882 6.40759 30.4189 6.58695 29.896 6.28507L28.0016 5.19132Z" fill="white"/>
                    </svg>
                    <svg className='bottomPlate' width="45" height="3" viewBox="0 0 36 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.8677 1.52588e-05H2.05518C1.45143 1.52588e-05 0.961426 0.490015 0.961426 1.09377C0.961426 1.69752 1.45143 2.18752 2.05518 2.18752H34.8677C35.4714 2.18752 35.9614 1.69752 35.9614 1.09377C35.9614 0.490015 35.4714 1.52588e-05 34.8677 1.52588e-05Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default MainLandHeader;