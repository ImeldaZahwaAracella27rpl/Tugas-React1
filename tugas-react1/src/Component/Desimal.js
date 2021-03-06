import React from 'react'
import './Desimal.css'

class Desimal extends React.Component{
    constructor(){
        super();
        this.state = {
           pilihan: '',
           konversi: '',
           nilaiAwal: 0,
           hasilAkhir: ''
        }
    }

    pilihan = (event) => {
        this.setState({pilihan: event.target.value});
    }

    konversi = (event) => {
        this.setState({konversi: event.target.value});
    }

    nilaiAwal = (event) => {
        this.setState({nilaiAwal: event.target.value});
    }

    hitung = () => {
        let pilihan = this.state.pilihan
        let konversi = this.state.konversi
        let nilaiAwal = this.state.nilaiAwal

    if (konversi == 10){
        this.setState({hasilAkhir: nilaiAwal})
    }
    else if (konversi == 2){
        let des = nilaiAwal*1
        let bin = des.toString(2)
        this.setState({hasilAkhir: bin})
    }
    else if (konversi == 8){
        let des = nilaiAwal*1
        let okt = des.toString(8)
        this.setState({hasilAkhir: okt})
    }
    else if (konversi == 16){
        let des = nilaiAwal*1
        let hek = des.toString(16)
        this.setState({hasilAkhir: hek})
    }
}
    render(){
        return(
            <center>
            <div className="layer1">
                <div className="titlelayer">
                <h6>Konversi Bilangan Desimal</h6>
                </div>
                <table>
                   
                    <tr>
                        <td>
                            <div class="form-group">
                            <label name="pilihan" value="10">Desimal</label>
                            <input name="nilaiAwal" class="form-control" onChange={this.nilaiAwal} />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div class="form-group">
                            <label >Pilihan Konversi</label>
                            <select className="form-control" name="konversi" onChange={this.konversi}>
                                <option>Pilih Konversi -</option>
                                <option name="konversi" value="10">Desimal</option>
                                <option name="konversi" value="2">Biner</option>
                                <option name="konversi" value="8">Oktal</option>
                                <option name="konversi" value="16">Heksadesimal</option>
                            </select>
                            </div>
                        </td>
                    </tr>
                                    
                </table>             
                <button className="btn btn-danger" onClick={this.hitung}>Convert</button>
                <hr/>
                <h6>Hasil</h6>
                <input className="form form-control" name="hasil" value={this.state.hasilAkhir} disabled />
            </div>
            </center>
        );
    }
}
export default Desimal;