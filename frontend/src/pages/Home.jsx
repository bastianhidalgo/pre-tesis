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



    return (
        <div style={{marginBottom:650, marginTop:30}}>

            <h2  style={{marginBottom:70}} variant="h2">
            Software de Seguridad de Ingreso
            </h2>
                <div  >


                    <Link to="/qr_scanner" >
                    <button style={{width:300, height:50,backgroundColor:'blue'}}  variant="contained"  color="primary">
                        Escanear cédula de identidad
                    </button>
                    </Link>

                    <Link to="/crearVisita" >
                    <button style={{width:300, height:50, marginLeft:50,backgroundColor:'blue'}} variant="contained"  color="primary">
                        Agregar Visita
                    </button>
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
                        <td>Modificar/Ver</td>
                </tr>
        
      </tbody>
      </table>

      <table style={{textAlign:"start",borderSpacing:100,marginTop:-180, borderColor:"#819FF7",borderRadius: "20px"}} borderColor={"blue"}>
        <tbody border={"5"}>{

           visitas.map((visita,idx)=>{
            console.log(visita.id)
            return (
               <tr key={idx}>
                        <td >{visita.rut}</td>
                        <td >{visita.nombre}</td>
                        <td>{visita.apellido}</td>
                        <td>{visita.telefono}</td>
                        <td>
                          <button style={{backgroundColor:'yellow'}}  >Modificar</button>
            <button style={{backgroundColor:'green',marginLeft:40}}  >Ver</button>
            
            </td>
            
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
     /* 
     
     <table style={{textAlign:"center"}} variant="simple">
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