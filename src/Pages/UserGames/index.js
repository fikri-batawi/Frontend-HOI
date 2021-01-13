import React from 'react'
import { Header,Sidebar,TitlePage,Footer } from '../../Components'

const UserGames = () => {
    return(
        <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <Header />
            <div class="app-main">
                <Sidebar />
                <div class="app-main__outer">
                    <div class="app-main__inner">
                        <TitlePage title="Page User Games"/>                      
                        <div class="row">
                            <div class="col-md-12">
                                <div class="main-card mb-3 card">
                                    <div class="card-header"> Game User
                                    </div>
                                    <div class="table-responsive">
                                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">#</th>
                                                    <th>Name</th>
                                                    <th class="text-center">About</th>
                                                    <th class="text-center">Game</th>
                                                    <th class="text-center">Description</th>
                                                    <th class="text-center">Slug</th>
                                                    <th class="text-center">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-center text-muted">#345</td>
                                                    <td>
                                                        <div class="widget-content p-0">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-left mr-3">
                                                                    <div class="widget-content-left">
                                                                        <img width="40" class="rounded-circle"
                                                                            src="assets/images/avatars/4.jpg" alt=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="widget-content-left flex2">
                                                                    <div class="widget-heading">John Doe</div>
                                                                    <div class="widget-subheading opacity-7">Web Developer
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">Madrid</td>
                                                    <td class="text-center">
                                                        <div class="badge badge-warning">Pending</div>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-1"
                                                            class="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center text-muted">#347</td>
                                                    <td>
                                                        <div class="widget-content p-0">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-left mr-3">
                                                                    <div class="widget-content-left">
                                                                        <img width="40" class="rounded-circle"
                                                                            src="assets/images/avatars/3.jpg" alt=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="widget-content-left flex2">
                                                                    <div class="widget-heading">Ruben Tillman</div>
                                                                    <div class="widget-subheading opacity-7">Etiam sit amet
                                                                        orci eget</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">Berlin</td>
                                                    <td class="text-center">
                                                        <div class="badge badge-success">Completed</div>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-2"
                                                            class="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center text-muted">#321</td>
                                                    <td>
                                                        <div class="widget-content p-0">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-left mr-3">
                                                                    <div class="widget-content-left">
                                                                        <img width="40" class="rounded-circle"
                                                                            src="assets/images/avatars/2.jpg" alt=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="widget-content-left flex2">
                                                                    <div class="widget-heading">Elliot Huber</div>
                                                                    <div class="widget-subheading opacity-7">Lorem ipsum
                                                                        dolor sic</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">London</td>
                                                    <td class="text-center">
                                                        <div class="badge badge-danger">In Progress</div>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-3"
                                                            class="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center text-muted">#55</td>
                                                    <td>
                                                        <div class="widget-content p-0">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-left mr-3">
                                                                    <div class="widget-content-left">
                                                                        <img width="40" class="rounded-circle"
                                                                            src="assets/images/avatars/1.jpg" alt=""/>
                                                                    </div>
                                                                </div>
                                                                <div class="widget-content-left flex2">
                                                                    <div class="widget-heading">Vinnie Wagstaff</div>
                                                                    <div class="widget-subheading opacity-7">UI Designer
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center">Amsterdam</td>
                                                    <td class="text-center">
                                                        <div class="badge badge-info">On Hold</div>
                                                    </td>
                                                    <td class="text-center">
                                                        <button type="button" id="PopoverCustomT-4"
                                                            class="btn btn-primary btn-sm">Details</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="d-block text-center card-footer">
                                        <ul class="pagination">
                                            <li class="page-item"><a href="javascript:void(0);" class="page-link" aria-label="Previous"><span aria-hidden="true">«</span><span class="sr-only">Previous</span></a></li>
                                            <li class="page-item"><a href="javascript:void(0);" class="page-link">1</a></li>
                                            <li class="page-item active"><a href="javascript:void(0);" class="page-link">2</a></li>
                                            <li class="page-item"><a href="javascript:void(0);" class="page-link">3</a></li>
                                            <li class="page-item"><a href="javascript:void(0);" class="page-link">4</a></li>
                                            <li class="page-item"><a href="javascript:void(0);" class="page-link">5</a></li>
                                            <li class="page-item"><a href="javascript:void(0);" class="page-link" aria-label="Next"><span aria-hidden="true">»</span><span class="sr-only">Next</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
} 
export default UserGames