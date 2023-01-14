function Object() {
  const user = {
    firstname: "Santiago",
    lastname: "Yepes",
  };
  return <h1>{JSON.stringify(user)}</h1>;
}

  /*The compomens un react are named with upper case*/

function Usercard() {
  return <h1>Usercard</h1>;
}

export { Usercard, Object };
