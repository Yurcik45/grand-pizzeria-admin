import React, {useRef, useEffect, useState} from 'react';
import './HomePage.sass'
import italy from '../../IMG/italy.png'
import no_pizza from '../../IMG/no_only_pizza.png'
import always_new from '../../IMG/always_new.png'
import kids from '../../IMG/kids_friendly.png'
import map from '../../IMG/map.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Button from "../UI/Button/Button"
import ReactMapGL, {Marker} from 'react-map-gl'

const HomePage = () => {
    const [marker] = useState({
        latitude: 48.923981,
        longitude: 24.719878
    })
    const [viewport, setViewport] = useState({
        latitude: 48.923981,
        longitude: 24.719878,
        width: "750px",
        height: "100%",
        position: "absolute",
        zoom: 16
    });

    const sliderData = [
        {
            image: <img src={italy} alt="italy"/>,
            header: 'Італія на смак',
            mainText: 'Серед десятків закладів громадського харчування, які пропонують свої послуги в столиці Прикарпатського краю, саме GRANDE PIZZERIA славиться неперевершеним смаком італійської кухні!',
        },
        {
            image: <img src={no_pizza} alt="no_pizza"/>,
            header: 'Не тільки піца',
            mainText: 'GRANDE PIZZERIA - не тільки піцерія , а й бездоганне місце щоб осягнути всі тонкощі італійської кухні',
        },
        {
            image: <img src={always_new} alt="always_new"/>,
            header: 'Завжди НОВЕ',
            mainText: 'Особливістю GRANDE PIZZERIA є постійні новинки у меню , ми підбираємо для Вас все найкраще та найцікавіше із світу італійської кухні =)',
        }
    ]

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={'HomePage'}>
            <div className="header">
                <div className="leftContent">
                    <a href="" className={'mainLink'}>
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
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M579.384 686.966V728.19C730.733 692.71 843.57 556.871 843.57 394.338C843.57 205.11 690.193 51.3619 500.669 51.3619C311.482 51.3619 157.768 204.772 157.768 394.338C157.768 574.78 297.293 722.784 474.318 736.3V788C268.577 774.484 106.08 603.503 106.08 394.338C106.417 176.726 283.104 0 500.669 0C718.571 0 895.258 176.726 895.258 394.338C895.258 585.256 759.787 744.41 579.384 780.904H579.046C562.155 784.283 544.587 786.648 526.682 788V92.9245C681.747 106.103 803.367 236.197 803.367 394.676C803.705 534.57 708.436 652.161 579.384 686.966ZM579.384 632.225V156.789C679.045 189.566 751.003 283.842 751.003 394.338C751.003 505.172 679.045 599.11 579.384 632.225Z"
                                  fill="white"/>
                        </svg>
                        <p>GRANDE PIZZERIA</p>
                    </a>
                    <div className="choiceLang">
                        <p className={'currentLang'}>UA</p>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.398025 0.882893C0.00750059 1.27342 0.00750044 1.90658 0.398025 2.29711L4.89381 6.79289C5.28434 7.18342 5.28434 7.81658 4.89381 8.20711L0.398025 12.7029C0.00750059 13.0934 0.00750029 13.7266 0.398024 14.1171L0.573811 14.2929C0.964335 14.6834 1.5975 14.6834 1.98802 14.2929L8.07381 8.20711C8.46434 7.81658 8.46434 7.18342 8.07381 6.79289L1.98803 0.707107C1.5975 0.316583 0.964335 0.316582 0.573811 0.707107L0.398025 0.882893Z"
                                fill="white"/>
                        </svg>
                        <p className={'changeLang'}>EN</p>
                    </div>
                </div>
                <div className="rightContent">
                    <a href="#">Головна</a>
                    <a href="#">Меню</a>
                    <a href="#">Відгуки</a>
                    <a href="#">Ми на карті</a>
                    <a href="#" className={'basket'}>
                        <svg className={'uppPlate'} width="36" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.0016 5.19132L26.9078 7.08575C34.5503 12.1536 37.0139 22.394 32.3661 30.4443L31.8192 31.3915C31.5173 31.9144 30.848 32.0938 30.3251 31.7919L1.90864 15.3856C1.38578 15.0838 1.20643 14.4144 1.5083 13.8915L2.05518 12.9443C6.70306 4.89396 16.8033 1.90736 25.0134 5.992C24.9619 6.06583 26.1072 4.09757 26.1072 4.09757L24.2127 3.00382C23.6899 2.70195 23.5105 2.03259 23.8124 1.50973C24.1143 0.986868 24.7836 0.807515 25.3065 1.10939L30.9898 4.39064C31.5126 4.69252 31.692 5.36187 31.3901 5.88473C31.0882 6.40759 30.4189 6.58695 29.896 6.28507L28.0016 5.19132Z" fill="white"/>
                        </svg>
                        <svg className={'bottomPlate'} width="45" height="3" viewBox="0 0 36 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.8677 1.52588e-05H2.05518C1.45143 1.52588e-05 0.961426 0.490015 0.961426 1.09377C0.961426 1.69752 1.45143 2.18752 2.05518 2.18752H34.8677C35.4714 2.18752 35.9614 1.69752 35.9614 1.09377C35.9614 0.490015 35.4714 1.52588e-05 34.8677 1.52588e-05Z" fill="white"/>
                        </svg>

                    </a>
                </div>
            </div>
            <div className="contacts">
                <a href="#">м. Івано-Франківськ, вул. Гаркуші, 21</a>
                <div className="telephones">
                    <a href="#">+380996344222</a>
                    <a href="#">+380677883382</a>
                </div>
            </div>
            <div className="mainNavigationLinks">
                <div className="mainLinks">
                    <a href="#">їжа</a>
                    <a href="#">напої</a>
                    <a href="#">тепло</a>
                </div>
                <div className="links">
                    <Button value={'ПЕРЕЙТИ В МЕНЮ'} className={'mainButton'}/>
                </div>
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {
                        sliderData.map(slider =>
                            <div>
                                <div className="scrollItem">
                                    <div className="photo">
                                        {slider.image}
                                    </div>
                                    <div className="scrollItemText">
                                        <header>{slider.header}</header>
                                        <p>{slider.mainText}</p>
                                        <Button value={'СКУШТУЙТЕ'} className={'eventButton'}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
            <div className="pause">
                <div className="pauseItems">
                    <h2>Уже були у нашому ресторані?</h2>
                    <p>Ми були б раді Вашому відгуку про нас</p>
                </div>
                <button className={'pauseButton'}>Перейти до відгуків</button>
            </div>
            <div className="remarkkids">
                <div className="remarkkidsText">
                    <header>We are kids-friendly</header>
                    <p>GRANDE PIZZERIA є першим kids-friendly преміум закладом Івано-Франківська. Саме тому, якщо
                        Вам потрібно провести бізнес-зустріч, і немає можливості залишити дитину вдома, неодмінно
                        приходьте до нас!</p>
                    <button className={'eventButton'}>Віртуальний тур</button>
                </div>
                <div className="photo">
                    <img src={kids} alt="italy"/>
                </div>
            </div>
            <div className="pause">
                <div className="pauseItems">
                    <h2>Завжди великий вибір</h2>
                </div>
                <button className={'pauseButton'}>Спробуй</button>
            </div>
            <div className="location">
                <div className="locationText">
                    <header>м. Івано-Франківськ,вул. Гаркуші, 21</header>
                    <p>Понеділок - П’ятниця 11:00 — 22:00</p>
                    <p>Субота - Неділя 12:00 — 23:00</p>
                    <div className="socialLinks">
                        <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.65118 24.3335H9.04618V13.3835H12.7212L13.2762 9.1235H9.04618V6.3935C9.04618 5.1635 9.39118 4.3235 11.1612 4.3235H13.4262V0.498496C13.0362 0.453496 11.7012 0.333496 10.1412 0.333496C6.87118 0.333496 4.65118 2.3285 4.65118 5.9735V9.1235H0.961182V13.3835H4.65118V24.3335Z" fill="#1F2B16"/>
                        </svg>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0117 12.3335C17.0117 10.0835 15.2117 8.2835 12.9617 8.2835C10.7117 8.2835 8.91167 10.0835 8.91167 12.3335C8.91167 14.5835 10.7117 16.3835 12.9617 16.3835C15.2117 16.3835 17.0117 14.5835 17.0117 12.3335ZM19.1117 12.3335C19.1117 15.7835 16.4117 18.4835 12.9617 18.4835C9.51167 18.4835 6.81167 15.7835 6.81167 12.3335C6.81167 8.8835 9.51167 6.1835 12.9617 6.1835C16.4117 6.1835 19.1117 8.8835 19.1117 12.3335ZM20.7617 5.8835C20.7617 6.7835 20.1617 7.3835 19.2617 7.3835C18.3617 7.3835 17.7617 6.7835 17.7617 5.8835C17.7617 4.9835 18.3617 4.3835 19.2617 4.3835C20.1617 4.3835 20.7617 5.1335 20.7617 5.8835ZM12.9617 2.4335C11.1617 2.4335 7.41167 2.2835 5.91167 2.8835C4.86167 3.3335 3.96167 4.2335 3.66167 5.2835C3.06167 6.7835 3.21167 10.5335 3.21167 12.3335C3.21167 14.1335 3.06167 17.8835 3.66167 19.3835C3.96167 20.4335 4.86167 21.3335 5.91167 21.6335C7.41167 22.2335 11.3117 22.0835 12.9617 22.0835C14.6117 22.0835 18.5117 22.2335 20.0117 21.6335C21.0617 21.1835 21.8117 20.4335 22.2617 19.3835C22.8617 17.7335 22.7117 13.9835 22.7117 12.3335C22.7117 10.6835 22.8617 6.7835 22.2617 5.2835C21.9617 4.2335 21.0617 3.3335 20.0117 3.0335C18.5117 2.2835 14.7617 2.4335 12.9617 2.4335ZM24.9617 12.3335V17.2835C24.9617 19.0835 24.3617 20.8835 23.0117 22.3835C21.6617 23.7335 19.8617 24.3335 17.9117 24.3335H8.01167C6.21167 24.3335 4.41167 23.7335 2.91167 22.3835C1.71167 21.0335 0.96167 19.2335 0.96167 17.2835V12.3335V7.3835C0.96167 5.4335 1.71167 3.6335 2.91167 2.2835C4.41167 1.0835 6.21167 0.333496 8.01167 0.333496H17.9117C19.7117 0.333496 21.5117 0.933496 23.0117 2.2835C24.2117 3.6335 24.9617 5.4335 24.9617 7.3835V12.3335Z" fill="#1F2B16"/>
                        </svg>
                        <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.92276 11.1619C9.92276 11.5307 9.79359 11.8451 9.53523 12.1052C9.27687 12.3652 8.9692 12.4952 8.6122 12.4952C8.2458 12.4952 7.93342 12.3652 7.67507 12.1052C7.41671 11.8451 7.28753 11.5307 7.28753 11.1619C7.28753 10.8026 7.41671 10.4929 7.67507 10.2328C7.93342 9.97277 8.2458 9.84275 8.6122 9.84275C8.9692 9.84275 9.27687 9.97277 9.53523 10.2328C9.79359 10.4929 9.92276 10.8026 9.92276 11.1619ZM26.1851 11.1477C26.1851 11.5165 26.0559 11.8309 25.7976 12.091C25.5392 12.351 25.2268 12.481 24.8604 12.481C24.494 12.481 24.1817 12.351 23.9233 12.091C23.665 11.8309 23.5358 11.5165 23.5358 11.1477C23.5358 10.7789 23.665 10.4669 23.9233 10.2115C24.1817 9.95622 24.494 9.82856 24.8604 9.82856C25.2268 9.82856 25.5392 9.95622 25.7976 10.2115C26.0559 10.4669 26.1851 10.7789 26.1851 11.1477ZM11.5293 11.1619C11.5293 10.4148 11.2639 9.77182 10.7331 9.23282C10.2023 8.69381 9.56107 8.42431 8.80948 8.42431C8.0579 8.42431 7.41671 8.69145 6.88591 9.22573C6.3551 9.76 6.0897 10.4054 6.0897 11.1619C6.0897 11.9184 6.3551 12.5638 6.88591 13.0981C7.41671 13.6323 8.0579 13.8995 8.80948 13.8995C9.56107 13.8995 10.2023 13.6323 10.7331 13.0981C11.2639 12.5638 11.5293 11.9184 11.5293 11.1619ZM27.7775 11.1477C27.7775 10.3912 27.5121 9.74582 26.9813 9.21154C26.4505 8.67726 25.8093 8.41012 25.0577 8.41012C24.3155 8.41012 23.6767 8.67726 23.1412 9.21154C22.6057 9.74582 22.3379 10.3912 22.3379 11.1477C22.3379 11.9042 22.6033 12.5496 23.1341 13.0839C23.665 13.6182 24.3061 13.8853 25.0577 13.8853C25.8093 13.8853 26.4505 13.6182 26.9813 13.0839C27.5121 12.5496 27.7775 11.9042 27.7775 11.1477ZM12.7271 11.1619C12.7271 12.2588 12.3443 13.1926 11.5786 13.9633C10.8129 14.734 9.88988 15.1193 8.80948 15.1193C7.71969 15.1193 6.79196 14.7316 6.02629 13.9562C5.26061 13.1808 4.87778 12.2494 4.87778 11.1619C4.87778 10.0744 5.26296 9.14535 6.03333 8.37466C6.8037 7.60398 7.72909 7.21863 8.80948 7.21863C9.88988 7.21863 10.8129 7.60398 11.5786 8.37466C12.3443 9.14535 12.7271 10.0744 12.7271 11.1619ZM28.9894 11.1477C28.9894 12.2352 28.6066 13.1643 27.8409 13.9349C27.0753 14.7056 26.1475 15.091 25.0577 15.091C23.9773 15.091 23.0543 14.7056 22.2886 13.9349C21.5229 13.1643 21.1401 12.2352 21.1401 11.1477C21.1401 10.0602 21.5229 9.13116 22.2886 8.36048C23.0543 7.58979 23.9773 7.20445 25.0577 7.20445C26.1475 7.20445 27.0753 7.58979 27.8409 8.36048C28.6066 9.13116 28.9894 10.0602 28.9894 11.1477ZM15.4046 11.1903C15.4046 9.38412 14.7681 7.84038 13.4951 6.55906C12.2221 5.27774 10.6884 4.63708 8.89404 4.63708C7.71969 4.63708 6.6346 4.93022 5.63875 5.51651C4.64291 6.1028 3.85375 6.89949 3.27127 7.90658C2.6888 8.91367 2.39756 10.0082 2.39756 11.1903C2.39756 12.3723 2.6888 13.4669 3.27127 14.4739C3.85375 15.481 4.64291 16.2777 5.63875 16.864C6.6346 17.4503 7.71969 17.7435 8.89404 17.7435C10.6884 17.7435 12.2221 17.1028 13.4951 15.8215C14.7681 14.5401 15.4046 12.9964 15.4046 11.1903ZM24.8182 3.06261C22.4319 2.01296 19.8201 1.48814 16.9829 1.48814C13.986 1.48814 11.2944 2.00824 8.90813 3.04842C10.0073 3.04842 11.0548 3.26355 12.0507 3.69381C13.0465 4.12407 13.9038 4.70327 14.6225 5.4314C15.3412 6.15953 15.9143 7.02478 16.3417 8.02714C16.7692 9.02951 16.9829 10.0839 16.9829 11.1903C16.9829 10.1028 17.1873 9.06497 17.5959 8.07679C18.0046 7.08861 18.5589 6.23518 19.2588 5.51651C19.9587 4.79783 20.7925 4.21627 21.7602 3.77183C22.7278 3.32738 23.7472 3.09098 24.8182 3.06261ZM31.5683 11.1903C31.5683 9.38412 30.9341 7.84038 29.6659 6.55906C28.3976 5.27774 26.8662 4.63708 25.0718 4.63708C23.2774 4.63708 21.7437 5.27774 20.4707 6.55906C19.1977 7.84038 18.5612 9.38412 18.5612 11.1903C18.5612 12.9964 19.1977 14.5401 20.4707 15.8215C21.7437 17.1028 23.2774 17.7435 25.0718 17.7435C26.8662 17.7435 28.3976 17.1028 29.6659 15.8215C30.9341 14.5401 31.5683 12.9964 31.5683 11.1903ZM27.8198 3.1619H33.2171C32.8037 3.64417 32.4514 4.18554 32.1602 4.78601C31.8689 5.38648 31.681 5.92786 31.5965 6.41012C32.6299 7.83802 33.1466 9.4314 33.1466 11.1903C33.1466 12.6654 32.7849 14.0271 32.0615 15.2754C31.3381 16.5236 30.3564 17.5094 29.1163 18.2328C27.8762 18.9562 26.528 19.3179 25.0718 19.3179C23.8223 19.3179 22.6527 19.0531 21.5629 18.5236C20.4731 17.994 19.5524 17.2612 18.8008 16.325C18.3593 16.8546 17.7533 17.7009 16.9829 18.864C16.8796 18.656 16.6283 18.2659 16.229 17.6938C15.8297 17.1217 15.4798 16.6607 15.1791 16.3108C14.4276 17.247 13.5045 17.9822 12.41 18.5165C11.3155 19.0508 10.1435 19.3179 8.89404 19.3179C7.43785 19.3179 6.0897 18.9562 4.84959 18.2328C3.60948 17.5094 2.62773 16.5236 1.90434 15.2754C1.18094 14.0271 0.81924 12.6654 0.81924 11.1903C0.81924 9.4314 1.33595 7.83802 2.36938 6.41012C2.28482 5.92786 2.09693 5.38648 1.80569 4.78601C1.51445 4.18554 1.16215 3.64417 0.748779 3.1619H5.89241C7.29223 2.21627 8.9598 1.47632 10.8951 0.942043C12.8304 0.407764 14.8597 0.140625 16.9829 0.140625C19.0874 0.140625 21.065 0.4054 22.9157 0.934951C24.7665 1.4645 26.4012 2.20682 27.8198 3.1619Z" fill="#1F2B16"/>
                        </svg>
                    </div>
                </div>
                <div className="photo">
                    <ReactMapGL
                        {...viewport}
                        mapboxApiAccessToken={"pk.eyJ1IjoieXVyY2lrNDUiLCJhIjoiY2tkYXMxZm9lMGt4OTJxcnhidzBvbWFxNCJ9.l-QiP2mG-WuF_2kcmVm3WQ"}
                        onViewportChange={viewport => {
                            setViewport(viewport);
                        }}
                    >
                        <Marker
                            {...marker}
                            className={'Marker'}
                        >
                                <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9614 50C6.29393 34.775 0.461426 23.9425 0.461426 17.5C0.461426 15.2019 0.914076 12.9262 1.79353 10.803C2.67299 8.67984 3.96203 6.75066 5.58706 5.12563C7.21208 3.50061 9.14127 2.21157 11.2645 1.33211C13.3877 0.452651 15.6633 0 17.9614 0C20.2596 0 22.5352 0.452651 24.6584 1.33211C26.7816 2.21157 28.7108 3.50061 30.3358 5.12563C31.9608 6.75066 33.2499 8.67984 34.1293 10.803C35.0088 12.9262 35.4614 15.2019 35.4614 17.5C35.4614 23.9425 29.6289 34.775 17.9614 50Z" fill="#0D0E0D"/>
                                    <path d="M17.1237 27.2717V22.6727H15.4265V25.2021C12.1963 24.1291 9.864 21.085 9.864 17.4935C9.864 13.2997 13.0394 9.85054 17.1237 9.4235V7.71533C12.0978 8.15332 8.15583 12.358 8.15583 17.4935C8.15583 22.0377 11.2327 25.8482 15.4265 26.976C15.974 27.1184 16.5434 27.2169 17.1237 27.2717Z" fill="white"/>
                                    <path d="M3.46932 17.4935C3.46932 17.0117 3.07513 16.6285 2.60429 16.6285C2.13345 16.6285 1.75021 17.0117 1.73926 17.4935C1.73926 17.9643 2.1225 18.3476 2.60429 18.3476C3.08608 18.3476 3.46932 17.9643 3.46932 17.4935Z" fill="white"/>
                                    <path d="M34.1835 17.4278C34.1835 16.946 33.8002 16.5628 33.3294 16.5628C32.8586 16.5628 32.4644 16.957 32.4644 17.4278C32.4644 17.8986 32.8586 18.2819 33.3294 18.2819C33.8002 18.2819 34.1835 17.8986 34.1835 17.4278Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5181 26.976V28.3119C25.4237 27.1622 29.0809 22.7603 29.0809 17.4935C29.0809 11.3616 24.1097 6.37946 17.9668 6.37946C11.835 6.37946 6.85281 11.3507 6.85281 17.4935C6.85281 23.3407 11.3751 28.1367 17.1128 28.5747V30.25C10.4443 29.812 5.17749 24.2714 5.17749 17.4935C5.18844 10.4418 10.9152 4.71509 17.9668 4.71509C25.0295 4.71509 30.7562 10.4418 30.7562 17.4935C30.7562 23.6801 26.3653 28.8375 20.5181 30.0201H20.5072C19.9597 30.1295 19.3903 30.2062 18.81 30.25V7.72628C23.8359 8.15332 27.7779 12.369 27.7779 17.5044C27.7888 22.0377 24.701 25.8482 20.5181 26.976ZM20.5181 25.2021V9.79579C23.7483 10.8579 26.0806 13.9129 26.0806 17.4935C26.0806 21.085 23.7483 24.1291 20.5181 25.2021Z" fill="white"/>
                                </svg>
                        </Marker>
                    </ReactMapGL>
                </div>
            </div>
            <footer>
                <p>(c) Grande Pizzeria, 2019</p>
            </footer>
        </div>
    );
};

export default HomePage;