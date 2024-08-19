import React from 'react';
import './ImprimirVenta.css'; // Guarda los estilos en un archivo separado

function ImprimirVenta({ negocio, venta }) {
  return (
    <div className="contenedor">
      <table style={{ width: '100%' }}>
        <tr>
          <td>
            <img src={negocio.UrlLogo} alt="Logo" style={{ width: '120px', height: '120px' }} />
          </td>
          <td style={{ textAlign: 'right' }}>
            <table style={{ marginRight: 0, marginLeft: 'auto' }}>
              <tr><td><p className="title2">NÚMERO VENTA</p></td></tr>
              <tr><td>{venta.NumeroVenta}</td></tr>
            </table>
          </td>
        </tr>
      </table>
      <br />
      <table style={{ width: '100%' }}>
        <tr>
          <td>
            <table>
              <tr>
                <td>
                  <p className="title">{negocio.Nombre.toUpperCase()}</p>
                </td>
              </tr>
              <tr>
                <td><p className="text">Dirección: {negocio.Direccion}</p></td>
              </tr>
              <tr>
                <td>
                  <p className="text">Correo: {negocio.Correo}</p>
                </td>
              </tr>
            </table>
          </td>
          <td style={{ textAlign: 'right' }}>
            <table style={{ marginRight: 0, marginLeft: 'auto' }}>
              <tr>
                <td><p className="title">CLIENTE</p></td>
              </tr>
              <tr>
                <td><p className="text">{venta.NombreCliente}</p></td>
              </tr>
              <tr>
                <td><p className="text">{venta.DocumentoCliente}</p></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <br />
      <br />

      <table className="tbproductos" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th className="tbth">Producto</th>
            <th className="tbth" style={{ width: '130px' }}>Cantidad</th>
            <th className="tbth" style={{ width: '130px' }}>Precio</th>
            <th className="tbth" style={{ width: '130px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {venta.DetalleVenta.map((item, index) => (
            <tr key={index}>
              <td className="td-item"><p className="item">{item.DescripcionProducto}</p></td>
              <td className="td-item"><p className="item">{item.Cantidad}</p></td>
              <td className="td-item"><p className="item">{negocio.SimboloMoneda} {item.Precio}</p></td>
              <td style={{ backgroundColor: '#EDF6F9' }}><p className="item">{negocio.SimboloMoneda} {item.Total}</p></td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" rowSpan="3"></td>
            <td className="td-item">
              <p className="item-2">Sub Total</p>
            </td>
            <td className="item-3">
              <p>{negocio.SimboloMoneda} {venta.SubTotal}</p>
            </td>
          </tr>
          <tr>
            <td className="td-item">
              <p className="item-2">IGV</p>
            </td>
            <td className="item-3">
              <p>{negocio.SimboloMoneda} {venta.ImpuestoTotal}</p>
            </td>
          </tr>
          <tr>
            <td className="item-3">
              <p>Total</p>
            </td>
            <td className="item-3">
              <p>{negocio.SimboloMoneda} {venta.Total}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ImprimirVenta;
