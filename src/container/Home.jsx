import React, {Component, Fragment} from "react";
import Navbar from '../component/navbar';
import './Home.css';
import Card from '../component/Card'


class Home extends Component {
    state = {
        order:4
    }
    handleBerubah = (newValue) =>{
        this.setState({
            order: newValue
        })
    }
    render(){
        return(
            <Fragment>
                <Navbar/>
                <div className="kotak-user">
                    <h1 className="title">User data </h1>
                    <h3 className="nama-user">Nama User : Dennis Satriani Sp</h3>
                <h3 className="nama-user">Rank User : Gold</h3>
                <p className="nama-user">Total Belanja : {this.state.order} Jenis</p>
                </div>
                <Card Berubah={(value)=> this.handleBerubah(value)}/>
            </Fragment>
        )
    }
}

export default Home;