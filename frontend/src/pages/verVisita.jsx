import React,{ useState, useEffect } from 'react';
import {  Button, Fab} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import { clienteAxios } from '../clienteAxios';



const VerVisita = () =>{

  const [visita, setVisita]= useState([{
    id:'',
    rut:'',
    nombre:'',
    apellido: '',
    telefono: '',
  }])
   



    const handleChange=(e) =>{
        setVisita({
            ... visita,
            [e.target.name]: e.target.value
        })
    }


    const deleteVisita = async (e) => {
        e.preventDefault()
        try{
        const response = await clienteAxios.delete(`/usuarios/delete/${visita.id}`,visita);

        if(response.status==200){
        console.log("visita eliminada")
        }
        }catch(error){
          console.log("error al eliminar la visita")
          console.log(error)
        }
      }

    return (
        <div style={{marginBottom:650, marginTop:30}}>
            <div style={{marginTop:100, marginRight:1200}}>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>Volver</span>
            </div>
        <h2 style={{marginTop:-50}} >
                Visita
        </h2>

        <form  style={{marginTop:0}} >

        <table style={{textAlign:"end",borderSpacing:250,marginTop:-100}}>
            <tbody>
                <td>
                <label >Rut:</label>
                <label>{visita.rut}</label>
                <div></div>
                <label>Nombre:</label>
                <label>{visita.nombre}</label>
                </td>
                <td>
                <label>Apellido:</label>
                <label>{visita.apellido}</label>
                <div></div>
                <label>Teléfono:</label>
                <label>{visita.telefono}</label>

            </td>
            </tbody>
        </table>
        <Button style={{borderRadius: "5px"}} variant="contained" size="large" color="primary"  onClick={deleteVisita}  >Eliminar visita</Button>

        </form>

</div>

    );
}
export default VerVisita