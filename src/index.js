import React from "react";
import ReactDOM from "react-dom/client";
import { Example } from "./Example";
import { Object, Usercard } from "./Object";
import { Married } from "./Married";

const root = ReactDOM.createRoot(document.getElementById("root"));

//This is a component, ican repeat this code part anytimes in the root code
function Greeting(props) {
  const name = "Santiago";
  return (
    <>
      <h1>Este es un componente </h1>
      <p>Lorem Ipsum</p>
      <h1>{props.title}</h1>
      <p>{name}</p>
      <p>{10 + 10}</p>
    </>
  );
}

root.render(
  <>
    {/* One way to show content 
    {Greeting()}
    */}

    {/* Another way 
    <Greeting></Greeting>
    */}
    {/* Self Close Syntax */}
    <Greeting title="hola" />
    <Married />
    <Object />
    <Example
      name="Santi"
      id="123"
      amount={3000}
      married={true}
      points={[99.3, 55.2, 22]}
      address={{ street: "cll 2", city: "new York" }}
      greet={function (){return alert("Hola")}}
    />
    <Usercard />
  </>
);
