export function Married() {
  const married = true;
  const user = {
    firstname: "Santiago",
    lastname: "Yepes",
  };
  {
    /* This is a conditional with if and else */
  }
  return (
    <h1>
      {married ? "Yo " + user.firstname + " Estoy Casado" : "No estoy casado"}
    </h1>
  );
}
