import React from 'react'

const Sidebar = () => {
    return(
        <div class="app-sidebar sidebar-shadow">
            <div class="scrollbar-sidebar">
                <div class="app-sidebar__inner">
                    <ul class="vertical-nav-menu">
                        <li class="app-sidebar__heading">Dashboards</li>
                        <li>
                            <a href="index.html" class="mm-active">
                                <i class="metismenu-icon pe-7s-rocket"></i>
                                Users
                            </a>
                        </li>
                        <li>
                            <a href="index.html" class="">
                                <i class="metismenu-icon pe-7s-rocket"></i>
                                Games
                            </a>
                        </li>
                        <li>
                            <a href="index.html" class="">
                                <i class="metismenu-icon pe-7s-rocket"></i>
                                Game User
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar