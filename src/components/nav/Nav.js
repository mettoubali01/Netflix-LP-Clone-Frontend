import {useEffect, useState} from 'react';
import './nav.css'
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import RedeemIcon from '@material-ui/icons/Redeem';
import {IconButton} from "@material-ui/core";

function Nav() {
    const [show, handleShow] = useState(false);
    const [clickedIconDropDown, setClickedIconDropDown] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 100)
                handleShow(true);
            else
                handleShow(false);
        })

        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    function handleClickIcon() {
        setClickedIconDropDown(!clickedIconDropDown);
    }

    return (
        <div className={`nav ${show && "nav_background"}`}>
            <div className="left__section">
                <img alt="Netflix logo"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                     className="netflix__logo"/>

                <ul className={"tabbed_primary_navigation"}>
                    <li onClick={() => handleClickIcon()}
                        className={`li__dropdown ${clickedIconDropDown && "__responsive"}`}>
                        <a className={"link__dropdown"}>Menu</a>
                        <ul className={`w ${clickedIconDropDown && "submenu"}`}>
                            <li><a href="#">Themes and stuff</a></li>
                            <li><a href="#">Plugins</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul>
                    </li>
                    <li onClick={() => handleClickIcon()} className={`item ${clickedIconDropDown && "__responsive"}`}>
                        <a>Home</a>
                    </li>
                    <li onClick={() => handleClickIcon()} className={`item ${clickedIconDropDown && "__responsive"}`}>
                        <a>Series TV</a>
                    </li>
                    <li onClick={() => handleClickIcon()} className={`item ${clickedIconDropDown && "__responsive"}`}>
                        <a>Movies</a>
                    </li>
                    <li onClick={() => handleClickIcon()} className={`item ${clickedIconDropDown && "__responsive"}`}>
                        <a>Latest</a>
                    </li>
                    <li onClick={() => handleClickIcon()} className={`item ${clickedIconDropDown && "__responsive"}`}>
                        <a>My List</a>
                    </li>
                </ul>
            </div>
            <div className="right__section">
                <div className="right__section__icons">
                    <IconButton className={"icon__right__section"} aria-label="search" color={"primary"}>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton className={"icon__right__section"} aria-label="gift" color={"primary"}>
                        <RedeemIcon/>
                    </IconButton>
                    <IconButton className={"icon__right__section"} aria-label="not" color={"primary"}>
                        <NotificationsIcon/>
                    </IconButton>
                </div>
                <img alt="Netflix avatar logo"
                     src="https://occ-0-4638-360.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                     className="avatar__logo"/>
            </div>
        </div>
    )
}

export default Nav