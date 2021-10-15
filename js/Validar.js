function ingresar()
{
var Usuario="darlyn"
var Contraseña="examen";

if(document.formingreso.txtusuario.value==Usuario && 
        document.formingreso.txtcontraseña.value==Contraseña)

{
document.location="html/inicio.html"

}

else
{
alert("INGRESE USUARIO Y CONTRASEÑA CORRECTAMENTE")


}



}