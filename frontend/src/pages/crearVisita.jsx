import { useState } from "react";
import { FormControl, FormLabel, Button, Typography,List, ListItem, ListItemText, Container, Fab, Grid,Box, Card,Input} from '@material-ui/core';
import { createVisita } from '../data/visitas';
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";

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
    const submitVisita = async(e) =>{
        e.preventDefault()
        const response = await createVisita(visita)

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
                <Input  style={{borderRadius: "5px",marginTop:30,marginLeft: 50 , height:40, background: "white"}} label="Rut" handleChange={handleChange} name="Rut" placeholder="Ingrese rut" type="text" />
                <div></div>
                <label>Nombre:</label>
                <Input style={{borderRadius: "5px",marginTop:30,marginLeft: 50 , height:40, background: "white"}} handleChange={handleChange}  required type="text"  className="form-control" placeholder="Ingrese nombre" />
                </td>
                <td>
                <label>Apellido:</label>
                <Input style={{borderRadius: "5px",marginTop:30,marginLeft: 50 , height:40, background: "white"}}handleChange={handleChange}  required type="text" className="form-control"  placeholder="Ingrese apellido" />
                <div></div>
                <label>Teléfono:</label>
                <Input style={{borderRadius: "5px",marginTop:30,marginLeft: 50 ,height:40, background: "white"}} handleChange={handleChange}  required type="text" className="form-control" placeholder="Ingrese teléfono" />

            </td>
            </tbody>
        </table>
        <Button style={{borderRadius: "5px"}} variant="contained" size="large" color="primary"  type="submit" onClick={submitVisita}>Enviar datos</Button>

        </form>

</div>

    );
}
export default Visitas