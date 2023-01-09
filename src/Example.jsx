export function Example({ name, id = 1129, greet }) {
  console.log(greet);
  function add(x, y) {
    return x + y;
  }
  return <>
      <h1>{add(10, 20) + " " + name + " " + id}</h1>
    </>

}
