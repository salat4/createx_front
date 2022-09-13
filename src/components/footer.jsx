import Logo from "../images/logo-white.png";
import UserSvg from "../images/symbol-defs.svg";


export const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <ul className="footer__box container">
                    <li className="footer__box__left">
                        <img src={Logo} width='130' height='20' alt="logo" className="footer-logo" />
                        <p className="footer__box__left__text">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p> 
                        <ul className="footer__box__left__link">
                            <li className="footer__box__left__link__facebook">
                                <svg width="20" height="20" fill="white" opacity="0.6" className="footer__box__left__link__facebook--white footer__box__left__link--hover">
                                    <use href={`${UserSvg}#icon-facebook `}  />
                                </svg>
                            </li>
                            <li className="footer__box__left__link__twitter">
                                <svg width="20" height="20"className="footer__box__left__link__twitter--white footer__box__left__link--hover" fill="white" opacity="0.6">
                                    <use href={`${UserSvg}#icon-Twitter`} />
                                </svg>
                            </li>
                            <li className="footer__box__left__link__youtube">
                                <svg width="20" height="20" className="footer__box__left__link__youtube--white footer__box__left__link--hover" fill="white" opacity="0.6">
                                    <use href={`${UserSvg}#icon-youtube`} />
                                </svg>
                            </li>
                            <li className="footer__box__left__link__telegram">
                                <svg width="20" height="20" className="footer__box__left__link__telegram--white footer__box__left__link--hover" fill="white" opacity="0.6">
                                    <use href={`${UserSvg}#icon-telegram`} />
                                </svg>
                            </li>
                            <li className="footer__box__left__link__instagram">
                                <svg width="20" height="20" className="footer__box__left__link__instagram--white footer__box__left__link--hover" fill="white" opacity="0.6">
                                    <use href={`${UserSvg}#icon-instagram`} />
                                </svg>
                            </li>
                            <li className="footer__box__left__link__linkedin">
                                <svg width="20" height="20" className="footer__box__left__link__linkedin--white footer__box__left__link--hover" fill="white" opacity="0.6">
                                    <use href={`${UserSvg}#icon-linked-in`} />
                                </svg>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__box__center">
                        <div className="footer__box__center__sitemap">
                            <h3 className="footer__box__center__box__sitemap--white footer__title">
                                SITE MAP
                            </h3>
                            <ul className="footer__box__center__sitemap__list">
                                <li className="footer__box__center__box__sitemap__aboutus footer--gray list__item">
                                    About Us
                                </li>
                                <li className="footer__box__center__box__sitemap__courses footer--gray list__item">
                                    Courses
                                </li>
                                <li className="footer__box__center__box__sitemap__events footer--gray list__item">
                                    Events
                                </li>
                                <li className="footer__box__center__box__sitemap__blog footer--gray list__item" >
                                    Blog
                                </li>
                                <li className="footer__box__center__box__sitemap__contacts footer--gray list__item">
                                    Contacts
                                </li>
                                
                            </ul>    
                        </div>
                        <div className="footer__box__center__courses">
                        <h3 className="footer__box__center__courses--white footer__title ">
                            COURSES
                        </h3>
                            <ul className="footer__box__center__courses__list">
                                <li className="footer__box__center__courses__marketing footer--gray list__item">
                                    Marketing
                                </li>
                                <li className="footer__box__center__courses__management footer--gray list__item">
                                    Management
                                </li>
                                <li className="footer__box__center__courses__hr footer--gray list__item">
                                    HR & Recruting
                                </li>
                                <li className="footer__box__center__courses__design footer--gray list__item">
                                    Design
                                </li>
                                <li className="footer__box__center__courses__development footer--gray list__item">
                                    Development
                                </li>
                            </ul> 
                        </div> 
                        <div>
                            <h3 className="footer__box__center__courses--white footer__title ">
                            CONTACT US
                            </h3>
                            <ul className="footer__box__center__contactus">
                                <li className="footer__box__center__contactus__tel footer--gray list__item">
                                    <svg width="20" height="20" >
                                        <use href={`${UserSvg}#icon-iPhone`}  className="footer__box__left__link__facebook--white"/>
                                    </svg>
                                    <p>(405) 555-0128</p> 
                                </li>
                                <li className="footer__box__center__contactus__mail footer--gray list__item">
                                    <svg width="20" height="20" >
                                        <use href={`${UserSvg}#icon-mail`}  className="footer__box__left__link__facebook--white"/>
                                    </svg>
                                   <p>hello@createx.com</p> 
                                </li>
                            </ul>
                        </div>    
                    </li>
                    <li className="footer__box__right">
                        <h3 className="footer__box__right__title">SIGN UP TOOUR NEWSLETTER</h3>
                        <form className="footer__box__right__form">
                            <input className="footer__box__right__input"
                            placeholder="Email address"
                            ></input>
                            <svg width="15" height="10" className="footer__box__right__input__svg">
                                <use href={`${UserSvg}#icon-Right`}></use>
                            </svg>
                        </form>
                        <p className="footer__box__right__warning">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
                    </li>
                </ul>
                <div className="footer__bottom">
                    <div className="footer__bottom__container container">
                        <div className="footer__copyright ">
                            <p>© All rights reserved.</p>
                        </div>
                        <div className="footer__button">
                            <button className="footer__button--top">GO TO TOP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}