//! Resumo de temas de React

//. COMPONENTE FUNCIONAL

//= Tiene que comenzar con mayuscula (CONVENCION)
// function Saludo (props) { //= Los parametros son llamados de props "propriedades" (argumentos). Solo pueden ser enviados de padre a hijos. Del contenedor al contenido de ese contenedor.

//     return <h1> Hola, {props.nombre}! </h1> //= deben retornar un elemento de React JSX
// }
// Saludo("Gustavo");


//. COMPONENTE DE CLASE
//. Para realizar lo mismo que hicimos arriba, pero utilizando clases.

// class Saludos extends React.Component { //= Tenemos extender React.Component
//     render() { //= Tiene que tener un metodo render (u otro metodo) para retornar un JSX
//         return <h1> Hola, {this.props.nombre}! </h1>
//     }
// }

//! JSX
//. Es una combinacion de JS con HTML

const elemento = <h1>Eso es JSX</h1>;

