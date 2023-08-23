import React, {useState} from 'react'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import { clienteAxios } from '../clienteAxios';
const {Rut}=require ('rut.js')
const { GetRut, UseRegexRut } = require('./util');


function QRscanner() {

    const [qrscan, setQrscan] = useState('QR no encontrado');
    const [estado, setEstado] = useState('');
    const [rut,setRut]=useState('');
    const handleScan = data => {
        if (data) {
            setQrscan(GetRut(data))

            console.log(GetRut(data));

        }
    }
    const handleError = err => {
    console.error(err)
    }

    const clearTextBox = () => {
        setQrscan('Ingrese código');
        setEstado("")
      };
      const clearTextBox2 = () => {
        setRut('');
        setEstado("")
      };

      const handleChange = (event) => {
        setRut(event.target.value);
      };

      const compararRut = async () => {
        try{
        const response = await clienteAxios.get(`/usuarios/comparar/${qrscan}`);


        if(response.status==200){
        console.log("persona admitida")
        setEstado("persona admitida")
        
        }
    }catch(error){
         console.log("persona denegada")
         setEstado("persona rechazada")
            
         
        }
    }
      const compararRut2 = async () => {
                
            if(!UseRegexRut(rut)){
                setEstado("Rut invalido")
                return }


        try{
            const response = await clienteAxios.get(`/usuarios/comparar/${rut}`);
    

            if(response.status==200){
            console.log("persona admitida")
            setEstado("persona admitida")
            
            }
        }catch(error){
             console.log("persona denegada")
             setEstado("persona rechazada")
                
             
            }
      }



return (
    <div>
        <div style={{marginBottom:50, marginRight:1200}}>
            <Link to="/">
            <fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </fab>
            </Link>
            <span>Volver</span>
            </div>
            <center>
                <span>Escanear código QR</span>
            <div style={{marginTop:30,marginBottom:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
</div>
            </center>


            <textarea
                style={{fontSize:18, width:320, height:50, marginTop:100}}
                maxRows={4}
                value= {qrscan}
                />

        <button onClick={compararRut} variant="contained" size="medium" color="primary" style={{marginBottom:50, marginLeft:50,backgroundColor:'blue'}}>
        Procesar rut </button>
        <button onClick={clearTextBox} variant="contained" size="medium" color="primary" style={{marginBottom:50, marginLeft:50,backgroundColor:'blue'}}>
        Limpiar cuadro</button>
        <div>
        <label>Estado: {estado}</label>
        </div>
        <h4 style={{marginBottom:40,marginTop:30}} variant="h5">
            Ingrese rut en caso de no contar con la cédula
            </h4>
        <input type='text' value={rut} id='rut' style={{height:40, background: "white"}} onChange={handleChange}/>
        <button onClick={compararRut2} variant="contained" size="medium" color="primary" style={{ marginLeft:50,backgroundColor:'blue'}}>
        Procesar rut </button>
        <button onClick={clearTextBox2} variant="contained" size="medium" color="primary" style={{ marginLeft:50,backgroundColor:'blue'}}>
        Limpiar cuadro</button>
</div>
);


        }

export default QRscanner;
