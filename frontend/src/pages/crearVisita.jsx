import { useState } from "react";
import { Button, Fab,Input} from '@material-ui/core';

import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import { clienteAxios } from '../clienteAxios';


const Visitas = () =>{

    const [visita,setVisita]= useState({
      rut:'',
      nombre:'',
      apellido: '',
      telefono: ''
    })

    const handleChange=(e) =>{
        setVisita({
            ... visita,
            [e.target.name]: e.target.value
        })
    }


    const submitVisita = async (e) => {
        e.preventDefault(); 
        try{
            const response = await clienteAxios.post("/usuarios/create",visita);
    
    
            if(response.status==200){
            console.log("visita creada")
            
            }
        }catch(error){
            console.log("error al crear la visita")
            console.log(e)
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
                Registrar Visita
        </h2>

        <form  style={{marginTop:0}} >

        <table style={{textAlign:"end",borderSpacing:250,marginTop:-100}}>
            <tbody>
                <td>
                <label >Rut:</label>
                <Input  style={{borderRadius: "5px",marginTop:30,marginLeft: 50 , height:40, background: "white"}} label="Rut" onChange={handleChange} name="rut" placeholder="Ingrese rut" type="text" value={visita.rut} />
                <div></div>
                <label>Nombre:</label>
                <Input style={{borderRadius: "5px",marginTop:30,marginLeft: 50 , height:40, background: "white"}} label="Nombre" onChange={handleChange} name="nombre"  type="text"  value={visita.nombre} placeholder="Ingrese nombre" />
                </td>
                <td>
                <label>Apellido:</label>
                <Input style={{borderRadius: "5px",marginTop:30,marginLeft: 50 , height:40, background: "white"}} label="Apellido" onChange={handleChange} name="apellido" value={visita.apellido} type="text" placeholder="Ingrese apellido" />
                <div></div>
                <label>Teléfono:</label>
                <Input style={{borderRadius: "5px",marginTop:30,marginLeft: 50 ,height:40, background: "white"}} label="Telefono" onChange={handleChange}  name="telefono" value={visita.telefono}  type="text" placeholder="Ingrese teléfono" />

            </td>
            </tbody>
        </table>
        <Button style={{borderRadius: "5px"}} variant="contained" size="large" color="primary"  onClick={submitVisita}  >Registrar</Button>

        </form>

</div>

    );
}
export default Visitas