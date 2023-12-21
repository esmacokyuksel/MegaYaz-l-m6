
function Btns() {
  const celToFahren = (event) => {
    const celsius = parseFloat(event.target.value);
    if (!isNaN(celsius)) {
      const fahrenheit = (celsius * 9) / 5 + 32;
      document.getElementById('rankin').value = (celsius + 273.15) * (9 / 5);
      document.getElementById('santigrat').value = celsius;
      document.getElementById('kelvin').value = celsius + 273.15;
      return fahrenheit;
    } else {
      return '';
    }
  };

  return (
    <>
      <label htmlFor="fahren">Fahrenheit değeri (F):</label>
      <input type="number" id="fahren" onInput={celToFahren}></input>
      <label htmlFor="rankin">Rankine değeri  (R):</label>
      <input type="number" id="rankin"></input>
      <label htmlFor="santigrat">Santigrat değeri (C):</label>
      <input type="number" id="santigrat"></input>
      <label htmlFor="kelvin">Kelvin değeri (K):</label>
      <input type="number" id="kelvin"></input>
    </>
  );
}
export default Btns;
