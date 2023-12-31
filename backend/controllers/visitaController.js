const { useRegexNombre,useRegexTelefono, useRegexRut } = require('../utils/util');
const Rut=require('rut.js')
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const getVisitas= async(req,res)=>{
    try{
        const visitas =  await prisma.Visita.findMany() // select * from visitas

        if(visitas.length==0){
            return res.status(200).json({
                mensaje:"No hay registros de visitas"
            })
        }
        return res.status(200).json({
            mensaje:"Se han encontrado resultados",
            visitas:visitas,
        })

    }catch(error){
        console.log(error.stack)
        return res.status(400).json({
            mensaje:"Error al obtener el listado de visitas"

        })
    }

}

const createVisitas= async(req,res)=>{

    const {rut,nombre,apellido,telefono} = req.body;
    try{

        if(!useRegexNombre(req.body.nombre)){
            return res.status(406).json({
                message: 'nombre invalido'
          })
        }
        if(!useRegexNombre(req.body.apellido)){
            return res.status(406).json({
                message: 'apellido invalido'
          })
        }
        if(!useRegexTelefono(req.body.telefono)){
            return res.status(406).json({
                message: 'telefono invalido'
          });
        }
        if(!useRegexRut(req.body.rut)){
            return res.status(406).json({
                message: 'Rut invalido'
          });
        }

        const visita = await prisma.Visita.create({
            data:{
                rut,nombre,apellido,telefono
            }
        })
        return res.status(200).json({
            mensaje:"Se ha creado el usuario correctamente",
            visita:visita

        })

    }catch(error){
        console.log(error.stack);
        return res.status(400).json({
            mensaje:"Error al obtener al crear un usuario"
        })
    }
}
const compararRut= async(req,res)=>{
    const {rut}=req.params
    try{
        const visita = await prisma.Visita.findMany({
            where : {rut: String(rut)}
    })   
     if(!useRegexRut(req.params.rut)){
        return res.status(406).json({
            message: 'Rut invalido'
      });
    }
    if (visita.length === 0) { // Verificamos si el array de visitas está vacío
        return res.status(400).json({
          mensaje: "No se pudo encontrar a la visita",
        });
      }
    return res.status(200).json({
        mensaje:"Persona admitida",
        visita:visita
    })

    }catch(error){
        console.log(error.stack);
        return res.status(400).json({
            mensaje:"No se pudo encontrar a la visita"
    })


}
}
const deleteVisita= async(req,res)=>{
    const {id} = req.params
    try{
        const visita = await prisma.Visita.delete({
            where : {id: Number(id)}
        })
        if(!visita){
            return res.status(400).json({
                mensaje:"No se pudo encontrar a la visita"
            })
        }

        return res.status(200).json({
            mensaje:"Se ha eliminado la visita exitosamente",
            visita:visita
        })
    }catch(error)
    {
        console.log(error.stack);
        return res.status(400).json({
            mensaje:"No se pudo encontrar a la visita"
        })
    }
};

const getVisita= async(req,res)=>{
    const {id} = req.params
    try{

        const visita = await prisma.Visita.findUnique({
            where : {id: Number(id)}
        })
        if (!visita) { 
            return res.status(400).json({
              mensaje: "No se pudo encontrar a la visita",
            });
          }
        return res.status(200).json({
            mensaje:"Se ha encontrado a la visita",
            visita:visita
        })
    }catch(error)
    {
        console.log(error.stack);
        return res.status(400).json({
            mensaje:"Error al encontrar la visita"
        })
    }
};

const updateVisita = async(req,res)=>{
    const {id}=req.params
    const {rut,nombre,apellido,telefono} = req.body
    try{

    const visita =await prisma.Visita.update({
        where : {id: Number(id)}
    })
    return res.status(200).json({
        mensaje:"Se ha actualizado a la visita",
        visita:visita
    })

    }catch(error)
    {
        console.log(error.stack);
        return res.status(400).json({
            mensaje:"Error al actualizar a la visita"
        })
    }
}


module.exports={
getVisitas,
createVisitas,
deleteVisita,
getVisita,
updateVisita,
compararRut
}