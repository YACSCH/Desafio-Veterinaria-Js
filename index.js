const { registrar, leer } = require('./operaciones.js')

const argumentos = process.argv.slice(2)

operacion = argumentos[0] 
nombre  = argumentos[1] 
edad = argumentos[2] 
animal =  argumentos[3]  
color = argumentos[4] 
enfermedad = argumentos[5] 

if(operacion === "registrar")
{
    registrar(nombre, edad, animal, color, enfermedad)
}
    
if(operacion === "leer")
{ 
    leer()
}