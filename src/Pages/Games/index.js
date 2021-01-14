import React from 'react'
import { Header,Sidebar,TitlePage,Footer } from '../../Components'
import {connect} from 'react-redux'
import { createGame, getGames } from '../../Config/Redux/Action/game.action'
var DataTable = require('react-data-components').DataTable;

class Games extends React.Component {

    state = {
        game_name : '',
        desc      : '',
        slug      : ''
    }

    componentDidMount(){
        this.props.getGames()
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state)
        this.setState({game_name:'',desc:'',slug:''})
        this.props.createGame(this.state)
        .then(()=> {
            this.props.getGames()
        })
    }

    render(){
        let columns = [
            { title: 'Game Name', prop: 'game_name'  },
            { title: 'Description', prop: 'desc' },
            { title: 'Slug', prop: 'slug' },
            { title: 'Created At', prop: 'createdAt' },
            { title: 'Update At', prop: 'updatedAt' }
        ];
        return(
            <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <Header />
                <div class="app-main">
                    <Sidebar />
                    <div class="app-main__outer">
                        <div class="app-main__inner">
                            <TitlePage title="Page Games" />
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-card mb-3 card">
                                    <div class="card-body">
                                        <h5 class="card-title">Form Games</h5>
                                        <div class="position-relative row form-group">
                                            <label for="exampleEmail" class="col-sm-2 col-form-label">
                                                Name
                                            </label>
                                            <div class="col-sm-10">
                                                <input name="game_name" id="game_name" type="text" class="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.game_name}/>
                                            </div>
                                        </div>
                                        
                                        <div class="position-relative row form-group">
                                            <label for="exampleEmail" class="col-sm-2 col-form-label">
                                                Slug
                                            </label>
                                            <div class="col-sm-10">
                                                <input name="slug" id="slug" type="text" class="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.slug}/>
                                            </div>
                                        </div>
                                        
                                        <div class="position-relative row form-group">
                                            <label for="exampleEmail" class="col-sm-2 col-form-label">
                                                Description
                                            </label>
                                            <div class="col-sm-10">
                                                <input name="desc" id="desc" type="text" class="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.desc}/>
                                            </div>
                                        </div>                                  
                                        
                                        <div class="position-relative row form-check text-center">
                                            <div class="col-md-12">
                                                <button class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-card mb-3 card">
                                        <div class="card-header"> All Games
                                        </div>
                                        <DataTable
                                            keys="id"
                                            columns={columns}
                                            initialData={this.props.games}
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
    return {
        games : state.games
    }
}
const mapDispatch = (dispatch) => {
    return {
        getGames    : () => dispatch(getGames()),
        createGame  : (data) => dispatch(createGame(data))
    }
}

export default connect(mapState,mapDispatch)(Games)