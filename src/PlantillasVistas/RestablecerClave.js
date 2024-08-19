import React from 'react';

function RestablecerClave({ clave }) {
  return (
    <div style={{ backgroundColor: '#EDF6FF', padding: '20px' }}>
      <div style={{ width: '400px', borderRadius: '5px', margin: 'auto', backgroundColor: '#fff', boxShadow: '0px 0px 10px #DEDEDE', padding: '20px' }}>
        <table style={{ width: '100%' }}>
          <tr>
            <td align="center" colSpan="2">
              <h2 style={{ color: '#004DAF' }}>Contraseña Restablecida</h2>
            </td>
          </tr>
          <tr>
            <td align="left" colSpan="2">
              <p>Su contraseña fue restablecida:</p>
            </td>
          </tr>
          <tr>
            <td><h4 style={{ color: '#004DAF', margin: '2px' }}>Nueva Contraseña:</h4></td>
            <td>{clave}</td>
          </tr>
        </table>
        <div style={{ backgroundColor: '#FFE1CE', padding: '15px', marginTop: '15px', marginBottom: '15px' }}>
          <p style={{ margin: '0px', color: '#F45E00' }}>Le recomendamos cambiar la contraseña una vez inicie sesión.</p>
        </div>
      </div>
    </div>
  );
}

export default RestablecerClave;
