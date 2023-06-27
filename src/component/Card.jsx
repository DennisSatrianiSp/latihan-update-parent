import React, {Component, Fragment} from "react";
import './Card.css';

class Card extends Component{
    state={
        order:4
    }
    handleBerubah = (newValue) => {
        this.props.Berubah(newValue)
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order +1
        }, () => {
            this.handleBerubah(this.state.order)
        })
    }

    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
            order: this.state.order -1
        }, () => {
            this.handleBerubah(this.state.order)
        })
        }
    }
    render(){
        return(
            <Fragment>
                <div className="wrapper">
        <div className="card">
            <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/27/c3914d18-850b-4457-aa00-b638078d2cb4.jpg" alt="" className="gambar"/>
            <h3 className="judul">Nasi Dadar + Sambel</h3>
            <h5 className="harga">Rp 12.000,00</h5>
            <p className="desk">Paket Hemat Nasi + Dadar + Sambel hanya 12 ribu rupiah saja sudah kenyang</p>
            <button className="tambah" onClick={this.handlePlus}>Tambah</button>
            <button className="kurang" onClick={this.handleMinus}>Kurang</button>
        </div>
    </div>
            </Fragment>
        )
    }
}
export default Card;