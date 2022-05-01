function ComputerForm() {
  return (
    <form>
      <div>
        <label for='clave'> Número del Equipo: </label>
        <input
          id='clave'
          name='clave'
          type='number'
          min='0'
          max='99999'
          required
        />
        <br />
        <br />

        <label for='estado'> Estado: </label>
        <input id='estado' name='estado' type='text' maxLength='100' required />
        <br />
        <br />

        <label for='marca'> Marca: </label>
        <input id='marca' name='marca' type='text' maxLength='100' required />
        <br />
        <br />

        <label for='viejo'> Antigüedad: </label>
        <input
          id='viejo'
          name='viejo'
          type='number'
          min='0'
          max='999'
          required
        />
        <br />
        <br />

        <label for='fecha'> Fecha del Último Chequeo: </label>
        <input id='fecha' name='fecha' type='date' required />
        <br />
        <br />

        <label for='serial'> Serial de la Computadora: </label>
        <input id='serial' name='serial' type='text' maxLength='100' required />
        <br />
        <br />
      </div>

      <div>
        <input
          id='submit'
          type='button'
          class='btn btn-primary'
          value='Subir Datos'
        />
        <br />
      </div>
    </form>
  );
}

export default ComputerForm;
