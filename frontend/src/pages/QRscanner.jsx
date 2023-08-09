import React, {useState} from 'react'
import {Button,Fab, TextareaAutosize,Input,Typography } from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import { clienteAxios } from '../clienteAxios';

const { getRut } = require('./util');


function QRscanner() {

    const [qrscan, setQrscan] = useState('QR no encontrado');
    const [estado, setEstado] = useState('');
    const [rut,setRut]=useState('');
    const handleScan = data => {
        if (data) {
            setQrscan(getRut(data))

            console.log(getRut(data));

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
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
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


            <TextareaAutosize
                style={{fontSize:18, width:320, height:50, marginTop:100}}
                maxRows={4}
                value= {qrscan}
                />

        <Button onClick={compararRut} variant="contained" size="medium" color="primary" style={{marginBottom:50, marginLeft:50}}>
        Procesar rut </Button>
        <Button onClick={clearTextBox} variant="contained" size="medium" color="primary" style={{marginBottom:50, marginLeft:50}}>
        Limpiar cuadro</Button>
        <div>
        <label>Estado: {estado}</label>
        </div>
        <Typography style={{marginBottom:40,marginTop:30}} variant="h5">
            Ingrese rut en caso de no contar con la cédula
            </Typography>
        <Input type='text' value={rut} id='rut' style={{height:40, background: "white"}} onChange={handleChange}/>
        <Button onClick={compararRut2} variant="contained" size="medium" color="primary" style={{ marginLeft:50}}>
        Procesar rut </Button>
        <Button onClick={clearTextBox2} variant="contained" size="medium" color="primary" style={{ marginLeft:50}}>
        Limpiar cuadro</Button>
</div>
);


        }

export default QRscanner;
