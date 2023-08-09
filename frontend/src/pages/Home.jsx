import { Button} from '@material-ui/core';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { clienteAxios } from '../clienteAxios';

function Home() {

    const [visitas, setVisitas]= useState([{
        id:'',
        rut:'',
        nombre: '',
        apellido:'',
        telefono: ''
      }])


        const getVisitas = async () => {
          const response = await clienteAxios.get("/usuarios/getall");
          if(response.status==200){
          setVisitas(response.data.visitas)
          }
        }
        useEffect(() => {
          getVisitas()
        },[])

        const deleteVisita = async (e) => {
          e.preventDefault()
          try{
          const response = await clienteAxios.delete(`/usuarios/delete/${visitas.id}`,visitas);

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

            <h2  style={{marginBottom:70}} variant="h2">
            Software de Seguridad de Ingreso
            </h2>
                <div  >


                    <Link to="/qr_scanner" >
                    <Button style={{width:300, height:50}}  variant="contained"  color="primary">
                        Escanear cédula de identidad
                    </Button>
                    </Link>

                    <Link to="/crearVisita" >
                    <Button style={{width:300, height:50, marginLeft:50}} variant="contained"  color="primary">
                        Agregar visita
                    </Button>
                    </Link>

                </div>

        <div style={{marginTop:50}}>

    <table style={{textAlign:"end",borderSpacing:130,marginTop:-80, marginLeft:20}}  >
        <tbody>
          
               <tr >
                        <td>Rut</td>
                        <td >Nombre</td>
                        <td>Apellido</td>
                        <td>Teléfono</td>
                        <td>Modificar/Eliminar</td>
                </tr>
        
      </tbody>
      </table>

      <table style={{textAlign:"start",borderSpacing:100,marginTop:-180, borderColor:"#819FF7",borderRadius: "20px"}} borderColor={"blue"}>
        <tbody border={"5"}>{
           visitas.map((visita,idx)=>{
            return (
               <tr key={idx}>
                        <td >{visita.rut}</td>
                        <td >{visita.nombre}</td>
                        <td>{visita.apellido}</td>
                        <td>{visita.telefono}</td>
                        <td><Button style={{backgroundColor:'yellow'}}  >Modificar</Button>
            <Button style={{backgroundColor:'red',marginLeft:40}} onClick={deleteVisita} >Eliminar</Button></td>
                </tr>
        )
        })
          }

      </tbody>
      </table>


        </div>



        </div>
    );
    }
    export default Home;
     /* <table style={{textAlign:"center"}} variant="simple">
            <thead >
              <tr >
                <td fontWeight={"bold"}>Rut</td>
                <td fontWeight={"bold"}>Nombre</td>
                <td fontWeight={"bold"}>Apellido</td>
                <td fontWeight={"bold"}>Teléfono</td>
                <td fontWeight={"bold"}>Modificar/Eliminar</td>

              </tr>
            </thead>
            <tbody>{contentTable()}</tbody>
          </table>*/