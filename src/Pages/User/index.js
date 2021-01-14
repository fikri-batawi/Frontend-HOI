import React, { useEffect } from 'react'
import { Header,Sidebar,TitlePage,Footer } from '../../Components'
import {connect} from 'react-redux'
import { createUser, getUsers } from '../../Config/Redux/Action/user.action'
var DataTable = require('react-data-components').DataTable;

class User extends React.Component{
    state = {
        name    : '',
        about   : '',
    }

    componentDidMount(){
        this.props.getUsers()
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({name:'',about:''})
        this.props.createUser(this.state)
        .then(()=> {
            this.props.getUsers()
        })
    }

    render(){
        let columns = [
            { title: 'Name', prop: 'name'  },
            { title: 'About', prop: 'about' },
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
                            <TitlePage title="Page Users"/>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="main-card mb-3 card">
                                    <div class="card-body">
                                        <h5 class="card-title">Form User</h5>
                                        <div class="position-relative row form-group">
                                            <label for="exampleEmail" class="col-sm-2 col-form-label">
                                                Name
                                            </label>
                                            <div class="col-sm-10">
                                                <input name="name" id="name" type="text" class="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.name}/>
                                            </div>
                                        </div>
                                        
                                        <div class="position-relative row form-group">
                                            <label for="exampleText" class="col-sm-2 col-form-label">
                                                About
                                            </label>
                                            <div class="col-sm-10">
                                                <input name="about" id="about" class="form-control" onChange={(e)=>this.handleChange(e)} value={this.state.about}
                                                />
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
                                    <div class="main-card mb-3 card p-10">
                                        <div class="card-header"> All Users
                                        </div>
                                        <DataTable
                                            keys="id"
                                            columns={columns}
                                            initialData={this.props.users}
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
        users : state.users,
        offset: state.offset
    }
}
const mapDispatch = (dispatch) => {
    return{
        getUsers    : () => dispatch(getUsers()),
        createUser  : (data) => dispatch(createUser(data))
    }
}
export default connect(mapState,mapDispatch)(User)