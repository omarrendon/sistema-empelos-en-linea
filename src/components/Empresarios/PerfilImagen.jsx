import React from 'react';

function PerfilImagen({URL, ALT}) {
  const style = {
    width: "400px",
    borderRadius: "10px",
  }
  return (
    <>
      <img style={style} src={URL} alt={ALT} />
    </>
  );
}

export default PerfilImagen;
