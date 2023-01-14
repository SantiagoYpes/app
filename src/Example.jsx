import PropTypes from "prop-types";
/*We can define a default prop giving a parameter in the begining of the funcion*/ 
export function Example({ name, id , greet }) {
  if(!name){
    console.error("El texto es requerido")
  }
  console.log(greet);
  function add(x, y) {
    return x + y;
  }
  return <>
      <h1>{add(10, 20) + " " + name + " " + id}</h1>
    </>

}

/* This is the PropTypes config to define wich type of data we want to receive in the props
First we have to install the PropTypes library from npm with the following command
npm i prop-type */

Example.propTypes = {
  name : PropTypes.string.isRequired

}

/*I can edit the default prop*/

Example.defaultProps = {
  id : "Some User"
}
