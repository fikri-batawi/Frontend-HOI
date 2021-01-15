import React from 'react'
import { Header,Sidebar,TitlePage,Footer } from '../../Components'
import {connect} from 'react-redux'
import { getUserGame } from '../../Config/Redux/Action/user_game.action'
var DataTable = require('react-data-components').DataTable;

class UserGames extends React.Component{
    componentDidMount(){
        this.props.getUserGame()
    }
    render(){
        let columns = [
            { title: 'Name', prop: 'name'  },
            { title: 'About', prop: 'about' },
            { title: 'Game', prop: 'game_name' },
            { title: 'Type', prop: 'type' }
        ];
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
                                        <DataTable
                                            keys="id"
                                            columns={columns}
                                            initialData={this.props.user_game}
                                            initialPageLength={5}
                                            initialSortBy={{ prop: 'id', order: 'ascending' }}
                                        /> 
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
} 
const mapState = (state) => {
    return{
        user_game   : state.user_game
    }
}

const mapDispacth = (dispatch) => {
    return{
        getUserGame : () => dispatch(getUserGame())
    }
}

export default connect(mapState,mapDispacth)(UserGames)