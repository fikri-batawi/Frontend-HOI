import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import routes from "../../routes";

const Sidebar = () => {
    let curentRoute = useLocation().pathname
    console.log()
    return(
        <div class="app-sidebar sidebar-shadow">
            <div class="scrollbar-sidebar">
                <div class="app-sidebar__inner">
                    <ul class="vertical-nav-menu">
                        <li class="app-sidebar__heading">Dashboards</li>
                        {
                            routes.map(data => {
                                return (
                                    <li>
                                        <Link 
                                        class={curentRoute === data.url ? "mm-active" : null} 
                                        to={data.url}>
                                            <i class={data.icon}></i>
                                            {data.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar