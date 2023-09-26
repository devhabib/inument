/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";
import { useState } from "react";

export const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const menu = Menu;
    return (
        <div className="d-flex">
            <aside>
                <div className={`sidebar ${isOpen ? 'sidebar__open' : 'sidebar__closed'}`}>
                    <div className="sidebar__logo">
                        <button onClick={toggle}>i</button> <span>nument</span>
                    </div>
                    <button className="menu" onClick={toggle}>
                        <i className="fi fi-rr-menu-burger"></i>
                    </button>
                    <div className="sidbar__menu">
                        <ul>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.path} className="sidebar__menu--link" activeClassName="active">
                                        <div className="icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="link__name">{item.title}</div>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
            <main className={`main ${isOpen ? 'main__open' : 'main__closed'}`}>{children}</main>
        </div>
    )
}