import React from 'react';
import './AdminNavigation.sass'
import {NavLink} from "react-router-dom";

const AdminNavigation = () => {
    const AdminNavigationValues=[{
        name: 'Add Good',
        link: '/AdminPanel/AddGood',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.1 13.5H24V8.4C24 7.5 23.4 7.5 22.5 7.5C21.6 7.5 21 7.5 21 8.4V13.5H15.9C15 13.5 15 14.1 15 15C15 15.9 15 16.5 15.9 16.5H21V21.6C21 22.5 21.6 22.5 22.5 22.5C23.4 22.5 24 22.5 24 21.6V16.5H29.1C30 16.5 30 15.9 30 15C30 14.1 30 13.5 29.1 13.5ZM11.1 13.5H0.9C0 13.5 0 14.1 0 15C0 15.9 0 16.5 0.9 16.5H11.1C12 16.5 12 15.9 12 15C12 14.1 12 13.5 11.1 13.5V13.5ZM11.1 21H0.9C0 21 0 21.6 0 22.5C0 23.4 0 24 0.9 24H11.1C12 24 12 23.4 12 22.5C12 21.6 12 21 11.1 21V21ZM11.1 6H0.9C0 6 0 6.6 0 7.5C0 8.4 0 9 0.9 9H11.1C12 9 12 8.4 12 7.5C12 6.6 12 6 11.1 6V6Z" />
        </svg>
    },{
        name: 'Add Telegram User',
        link: '/AdminPanel/AddTelegramUser',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8312 4.64624L3.66875 13.1925C2.15625 13.8 2.165 14.6437 3.39125 15.02L9.08125 16.795L22.2462 8.48874C22.8687 8.10999 23.4375 8.31374 22.97 8.72874L12.3037 18.355H12.3012L12.3037 18.3562L11.9112 24.2212C12.4862 24.2212 12.74 23.9575 13.0625 23.6462L15.8262 20.9587L21.575 25.205C22.635 25.7887 23.3962 25.4887 23.66 24.2237L27.4337 6.43874C27.82 4.88999 26.8425 4.18874 25.8312 4.64624V4.64624Z" />
            </svg>
    },{
        name: 'Show Goods',
        link: '/AdminPanel/ShowGoods',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 4.5H3V25.5H10.5V4.5ZM13.5 4.5V25.5H27V4.5H13.5ZM0 4.5C0 2.85 1.35 1.5 3 1.5H27C27.7956 1.5 28.5587 1.81607 29.1213 2.37868C29.6839 2.94129 30 3.70435 30 4.5V25.5C30 26.2956 29.6839 27.0587 29.1213 27.6213C28.5587 28.1839 27.7956 28.5 27 28.5H3C2.20435 28.5 1.44129 28.1839 0.87868 27.6213C0.316071 27.0587 0 26.2956 0 25.5V4.5ZM4.5 6H9V9H4.5V6ZM4.5 10.5H9V13.5H4.5V10.5ZM4.5 15H9V18H4.5V15Z" />
        </svg>
    },{
        name: 'Show FeedBack',
        link: '/AdminPanel/ShowFeedBack',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 2.5H5C3.625 2.5 2.5125 3.625 2.5125 5L2.5 27.5L7.5 22.5H25C26.375 22.5 27.5 21.375 27.5 20V5C27.5 3.625 26.375 2.5 25 2.5ZM25 20H6.4625L5.725 20.7375L5 21.4625V5H25V20ZM13.75 15H16.25V17.5H13.75V15ZM13.75 7.5H16.25V12.5H13.75V7.5Z" />
        </svg>
    },{
        name: 'Show Ivents',
        link: '/AdminPanel/ShowIvents',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 7.5V26.25C1.875 26.7473 2.07254 27.2242 2.42417 27.5758C2.77581 27.9275 3.25272 28.125 3.75 28.125H26.25C26.7473 28.125 27.2242 27.9275 27.5758 27.5758C27.9275 27.2242 28.125 26.7473 28.125 26.25V7.5H1.875ZM3.75 1.875C2.75544 1.875 1.80161 2.27009 1.09835 2.97335C0.395088 3.67661 0 4.63044 0 5.625L0 26.25C0 27.2446 0.395088 28.1984 1.09835 28.9016C1.80161 29.6049 2.75544 30 3.75 30H26.25C27.2446 30 28.1984 29.6049 28.9016 28.9016C29.6049 28.1984 30 27.2446 30 26.25V5.625C30 4.63044 29.6049 3.67661 28.9016 2.97335C28.1984 2.27009 27.2446 1.875 26.25 1.875H3.75Z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5625 0C6.81114 0 7.0496 0.0987721 7.22541 0.274587C7.40123 0.450403 7.5 0.68886 7.5 0.9375V1.875C7.5 2.12364 7.40123 2.3621 7.22541 2.53791C7.0496 2.71373 6.81114 2.8125 6.5625 2.8125C6.31386 2.8125 6.0754 2.71373 5.89959 2.53791C5.72377 2.3621 5.625 2.12364 5.625 1.875V0.9375C5.625 0.68886 5.72377 0.450403 5.89959 0.274587C6.0754 0.0987721 6.31386 0 6.5625 0V0ZM23.4375 0C23.6861 0 23.9246 0.0987721 24.1004 0.274587C24.2762 0.450403 24.375 0.68886 24.375 0.9375V1.875C24.375 2.12364 24.2762 2.3621 24.1004 2.53791C23.9246 2.71373 23.6861 2.8125 23.4375 2.8125C23.1889 2.8125 22.9504 2.71373 22.7746 2.53791C22.5988 2.3621 22.5 2.12364 22.5 1.875V0.9375C22.5 0.68886 22.5988 0.450403 22.7746 0.274587C22.9504 0.0987721 23.1889 0 23.4375 0V0Z" />
            <path d="M23.4375 11.25H21.5625C21.0447 11.25 20.625 11.6697 20.625 12.1875V14.0625C20.625 14.5803 21.0447 15 21.5625 15H23.4375C23.9553 15 24.375 14.5803 24.375 14.0625V12.1875C24.375 11.6697 23.9553 11.25 23.4375 11.25Z" />
        </svg>
    },{
        name: 'Order Statistics',
        link: '/AdminPanel/OrderStatistics',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M14.8915 -0.0357766C14.8427 -0.026965 14.7946 -0.0150171 14.7473 -7.38127e-06C14.4868 0.0583792 14.2546 0.205289 14.0903 0.415688C13.926 0.626086 13.8397 0.886954 13.8462 1.15384V2.30768H3.46154C2.54348 2.30768 1.66303 2.67238 1.01386 3.32155C0.364697 3.97071 0 4.85117 0 5.76922L0 20.7692C0 22.68 1.55077 24.2308 3.46154 24.2308H13.8462V24.6635L7.57154 27.8008C7.29428 27.9346 7.08157 28.1732 6.98019 28.4639C6.87882 28.7546 6.89708 29.0737 7.03096 29.351C7.16484 29.6282 7.40338 29.8409 7.6941 29.9423C7.98482 30.0437 8.3039 30.0254 8.58115 29.8915L13.8462 27.2596V27.6923C13.8462 27.9983 13.9677 28.2918 14.1841 28.5082C14.4005 28.7246 14.694 28.8461 15 28.8461C15.306 28.8461 15.5995 28.7246 15.8159 28.5082C16.0323 28.2918 16.1538 27.9983 16.1538 27.6923V27.2596L21.4188 29.8915C21.6961 30.0254 22.0152 30.0437 22.3059 29.9423C22.5966 29.8409 22.8352 29.6282 22.969 29.351C23.1029 29.0737 23.1212 28.7546 23.0198 28.4639C22.9184 28.1732 22.7057 27.9346 22.4285 27.8008L16.1538 24.6635V24.2308H26.5385C28.4492 24.2308 30 22.68 30 20.7692V5.76922C30 4.85117 29.6353 3.97071 28.9861 3.32155C28.337 2.67238 27.4565 2.30768 26.5385 2.30768H16.1538V1.15384C16.1597 0.989759 16.1304 0.826326 16.068 0.674457C16.0056 0.522589 15.9116 0.385783 15.7921 0.273179C15.6726 0.160576 15.5305 0.0747683 15.3752 0.0214892C15.2199 -0.0317898 15.055 -0.0513132 14.8915 -0.0357766V-0.0357766ZM2.30769 5.76922H27.6923V20.7692H2.30769V5.76922ZM24.0865 6.92307C23.8281 6.95086 23.5866 7.0651 23.4012 7.2473L19.6154 11.0342L16.9835 8.39999C16.8574 8.27066 16.7028 8.17272 16.532 8.11405C16.3612 8.05538 16.179 8.03762 16.0001 8.0622C15.8212 8.08678 15.6505 8.15302 15.5019 8.25558C15.3532 8.35813 15.2307 8.49415 15.1442 8.65269L11.7185 14.6388L10.3119 11.1046C10.2436 10.9221 10.1302 10.7599 9.9823 10.6331C9.83437 10.5063 9.65674 10.419 9.46597 10.3793C9.2752 10.3397 9.0775 10.349 8.8913 10.4065C8.70511 10.4639 8.53648 10.5675 8.40115 10.7077L4.93962 14.1692C4.71928 14.3894 4.59544 14.6881 4.59533 14.9996C4.59522 15.3111 4.71886 15.6099 4.93904 15.8302C5.15922 16.0505 5.45791 16.1744 5.7694 16.1745C6.08089 16.1746 6.37967 16.0509 6.6 15.8308L8.79923 13.6315L10.4585 17.7415C10.5368 17.9477 10.6725 18.127 10.8496 18.2584C11.0267 18.3898 11.2377 18.4677 11.4577 18.4829C11.6777 18.498 11.8974 18.4499 12.0908 18.344C12.2843 18.2382 12.4434 18.0792 12.5492 17.8858L16.4077 11.1427L18.7869 13.5231C18.8945 13.6344 19.0234 13.7229 19.166 13.7834C19.3085 13.8438 19.4617 13.875 19.6165 13.875C19.7714 13.875 19.9246 13.8438 20.0671 13.7834C20.2096 13.7229 20.3386 13.6344 20.4462 13.5231L25.0615 8.90768C25.2438 8.73894 25.3668 8.51589 25.4121 8.27167C25.4575 8.02746 25.4228 7.77513 25.3133 7.5522C25.2038 7.32926 25.0252 7.14762 24.8042 7.03427C24.5832 6.92092 24.3315 6.88192 24.0865 6.92307Z" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    },{
        name: 'Telephones',
        link: '/AdminPanel/Telephones',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.8333 3.33334H9.16667C8.72464 3.33334 8.30072 3.50894 7.98816 3.8215C7.6756 4.13406 7.5 4.55798 7.5 5.00001V25C7.5 25.442 7.6756 25.866 7.98816 26.1785C8.30072 26.4911 8.72464 26.6667 9.16667 26.6667H20.8333C21.2754 26.6667 21.6993 26.4911 22.0118 26.1785C22.3244 25.866 22.5 25.442 22.5 25V5.00001C22.5 4.55798 22.3244 4.13406 22.0118 3.8215C21.6993 3.50894 21.2754 3.33334 20.8333 3.33334V3.33334ZM15.8333 25H14.1667V23.3333H15.8333V25ZM9.16667 21.6667V5.00001H20.8333V21.6667H9.16667Z" />
            </svg>
    },{
        name: 'Social Links',
        link: '/AdminPanel/SocialLinks',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5812 14.1162C11.9975 12.7 14.4675 12.7 15.8837 14.1162L16.7675 15L18.535 13.2325L17.6512 12.3487C16.4725 11.1687 14.9025 10.5175 13.2325 10.5175C11.5625 10.5175 9.9925 11.1687 8.81375 12.3487L6.16125 15C4.99162 16.1734 4.33484 17.7626 4.33484 19.4194C4.33484 21.0761 4.99162 22.6653 6.16125 23.8387C6.74109 24.4194 7.42996 24.8798 8.18827 25.1934C8.94658 25.507 9.75939 25.6677 10.58 25.6662C11.4008 25.6679 12.2139 25.5074 12.9724 25.1937C13.731 24.8801 14.42 24.4196 15 23.8387L15.8837 22.955L14.1162 21.1875L13.2325 22.0712C12.5281 22.7725 11.5746 23.1662 10.5806 23.1662C9.58666 23.1662 8.63316 22.7725 7.92875 22.0712C7.22688 21.3671 6.83276 20.4135 6.83276 19.4194C6.83276 18.4252 7.22688 17.4716 7.92875 16.7675L10.5812 14.1162Z" />
            <path d="M15 6.16124L14.1162 7.04499L15.8837 8.81249L16.7675 7.92874C17.4719 7.22748 18.4254 6.83378 19.4193 6.83378C20.4133 6.83378 21.3668 7.22748 22.0712 7.92874C22.7731 8.63283 23.1672 9.58645 23.1672 10.5806C23.1672 11.5748 22.7731 12.5284 22.0712 13.2325L19.4187 15.8837C18.0025 17.3 15.5325 17.3 14.1162 15.8837L13.2325 15L11.465 16.7675L12.3487 17.6512C13.5275 18.8312 15.0975 19.4825 16.7675 19.4825C18.4375 19.4825 20.0075 18.8312 21.1862 17.6512L23.8387 15C25.0083 13.8266 25.6651 12.2374 25.6651 10.5806C25.6651 8.92385 25.0083 7.33464 23.8387 6.16124C22.6656 4.991 21.0763 4.3338 19.4193 4.3338C17.7624 4.3338 16.173 4.991 15 6.16124V6.16124Z" />
        </svg>
    },{
        name: 'User Tell Statistics',
        link: '/AdminPanel/UserTellStatistics',
        icon:
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <path d="M20.4167 3.74925H29.0906L30 -0.000746424H10V20.6243H25L25.9094 16.8743H20.4167C20.1865 16.8743 20 16.6645 20 16.4055V15.468C20 15.209 20.1865 14.9993 20.4167 14.9993H26.3635L27.2729 11.2493H20.4167C20.1865 11.2493 20 11.0395 20 10.7805V9.843C20 9.58402 20.1865 9.37425 20.4167 9.37425H27.7271L28.6365 5.62425H20.4167C20.1865 5.62425 20 5.41449 20 5.1555V4.218C20 3.95902 20.1865 3.74925 20.4167 3.74925ZM8.27084 19.6287L6.92813 15.9221C6.78334 15.5231 6.41772 15.2782 6.03022 15.3209L3.6849 15.5799C2.7849 12.8295 2.76563 9.73343 3.6849 6.92445L6.03022 7.18343C6.41719 7.22621 6.78334 6.9807 6.92813 6.58226L8.27084 2.87562C8.42813 2.44261 8.28126 1.94691 7.92292 1.69964L5.87709 0.287535C5.13074 -0.227504 4.17136 -0.0300433 3.59115 0.700621C-1.2302 6.77093 -1.20051 15.9086 3.70053 21.9403C4.21459 22.5731 5.21719 22.6715 5.8698 22.2215L7.9224 20.8047C8.28126 20.5575 8.42761 20.0623 8.27084 19.6287V19.6287ZM25 22.4993H10C8.15886 22.4993 6.66667 24.178 6.66667 26.2493V28.1243C6.66667 29.1596 7.41303 29.9993 8.33334 29.9993H26.6667C27.587 29.9993 28.3333 29.1596 28.3333 28.1243V26.2493C28.3333 24.178 26.8412 22.4993 25 22.4993ZM17.5 28.1243C16.5797 28.1243 15.8333 27.2846 15.8333 26.2493C15.8333 25.2139 16.5797 24.3743 17.5 24.3743C18.4203 24.3743 19.1667 25.2139 19.1667 26.2493C19.1667 27.2846 18.4203 28.1243 17.5 28.1243Z" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="30" height="30" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    }];

    return (
        <nav className="AdminNavigation">
            <ul>
                <h1 className={'NavigationTopic'}>Navig page</h1>
                {
                    AdminNavigationValues.map((NavLinks, index) => {
                    return (
                        <li key={index} className="NavigationValues">
                            <NavLink activeClassName={'currentLink'} to={NavLinks.link}>
                                {NavLinks.icon}
                                {NavLinks.name}
                            </NavLink>
                        </li>
                    )
                })
                }
            </ul>
        </nav>
    );
};

export default AdminNavigation;