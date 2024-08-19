<>
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-desktop" />
          </div>
          <div className="sidebar-brand-text mx-3">GAMERS CUROC</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseAdministracion"
            aria-expanded="true"
            aria-controls="collapseAdministracion"
          >
            <i className="fas fa-fw fa-cog" />
            <span>Admnistración</span>
          </a>
          <div
            id="collapseAdministracion"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                Usuarios
              </a>
              <a className="collapse-item" href="#">
                Negocio
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseInventario"
            aria-expanded="true"
            aria-controls="collapseInventario"
          >
            <i className="fas fa-fw fa-clipboard-list" />
            <span>Inventario</span>
          </a>
          <div
            id="collapseInventario"
            className="collapse"
            aria-labelledby="headingInventario"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                Categorias
              </a>
              <a className="collapse-item" href="#">
                Productos
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item active">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseVenta"
            aria-expanded="true"
            aria-controls="collapseVenta"
          >
            <i className="fas fa-fw fa-tags" />
            <span>Ventas</span>
          </a>
          <div
            id="collapseVenta"
            className="collapse"
            aria-labelledby="headingInventario"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                Nueva Venta
              </a>
              <a className="collapse-item" href="#">
                Historial Venta
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseReportes"
            aria-expanded="true"
            aria-controls="collapseReportes"
          >
            <i className="fas fa-fw fa-chart-area" />
            <span>Reportes</span>
          </a>
          <div
            id="collapseReportes"
            className="collapse"
            aria-labelledby="headingInventario"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                Reporte de Ventas
              </a>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars" />
            </button>
            <ul className="navbar-nav ml-auto">
              <div className="topbar-divider d-none d-sm-block" />
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Lauren Liliana
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="https://img.freepik.com/vector-gratis/avatar-mujer-estilo-plano_90220-2944.jpg?t=st=1723846663~exp=1723850263~hmac=5b5e9add593dd35d2b0fb04b16fc91ff720786c1519e5aba78282efc9fb5ff83&w=740"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Perfil
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Salir
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <div className="card shadow mb-4">
              <div className="card-header py-3 bg-second-primary">
                <h6 className="m-0 font-weight-bold text-white">
                  Historial de Venta
                </h6>
              </div>
              <div className="card-body">
                <div className="form-row align-items-end">
                  <div className="form-group col-sm-3">
                    <label id="cboBuscarPor">Buscar por</label>
                    <select
                      className="form-control form-control-sm"
                      id="cboBuscarPor"
                    >
                      <option value="fecha">Fechas</option>
                      <option value="numero">Numero Venta</option>
                    </select>
                  </div>
                  <div className="form-group col-sm-3 busqueda-fecha">
                    <label id="txtFechaInicio">Fecha Inicio</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="txtFechaInicio"
                    />
                  </div>
                  <div className="form-group col-sm-3 busqueda-fecha">
                    <label id="txtFechaFin">Fecha Fin</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="txtFechaFin"
                    />
                  </div>
                  <div className="form-group col-sm-3 busqueda-venta">
                    <label id="txtNumeroVenta">Numero Venta</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="txtNumeroVenta"
                    />
                  </div>
                  <div className="form-group col-sm-3">
                    <button
                      className="btn btn-success btn-block btn-sm"
                      type="button"
                      id="btnBuscar"
                    >
                      <i className="fas fa-search" /> Buscar
                    </button>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-sm table-striped" id="tbventa">
                      <thead>
                        <tr>
                          <th>Fecha Registro</th>
                          <th>Numero Venta</th>
                          <th>Tipo Documento</th>
                          <th>Documento Cliente</th>
                          <th>Nombre Cliente</th>
                          <th>Total</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>27/04/2022</td>
                          <td>00001</td>
                          <td>Boleta</td>
                          <td>101010</td>
                          <td>jose</td>
                          <td>2000</td>
                          <td>
                            <button
                              className="btn btn-info btn-sm"
                              data-toggle="modal"
                              data-target="#modalData"
                            >
                              <i className="fas fa-eye" /> Ver Detalle
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modalData"
              tabIndex={-1}
              role="dialog"
              aria-hidden="true"
              data-backdrop="static"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h6>Detalle Venta</h6>
                    <button
                      className="close"
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-row">
                            <div className="form-group col-sm-4">
                              <label id="txtFechaRegistro">
                                Fecha Registro
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtFechaRegistro"
                                disabled=""
                              />
                            </div>
                            <div className="form-group col-sm-4">
                              <label id="txtNumVenta">Numero Venta</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtNumVenta"
                                disabled=""
                              />
                            </div>
                            <div className="form-group col-sm-4">
                              <label id="txtUsuarioRegistro">
                                Usuario Registro
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtUsuarioRegistro"
                                disabled=""
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-4">
                              <label id="txtTipoDocumento">
                                Tipo Documento
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtTipoDocumento"
                                disabled=""
                              />
                            </div>
                            <div className="form-group col-sm-4">
                              <label id="txtDocumentoCliente">
                                Documento Cliente
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtDocumentoCliente"
                                disabled=""
                              />
                            </div>
                            <div className="form-group col-sm-4">
                              <label id="txtNombreCliente">
                                Nombre Cliente
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtNombreCliente"
                                disabled=""
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-4">
                              <label id="txtSubTotal">Sub Total</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtSubTotal"
                                disabled=""
                              />
                            </div>
                            <div className="form-group col-sm-4">
                              <label id="txtIGV">IGV</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtIGV"
                                disabled=""
                              />
                            </div>
                            <div className="form-group col-sm-4">
                              <label id="txtTotal">Total</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                id="txtTotal"
                                disabled=""
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                id="tbProductos"
                                className="table table-sm table-striped"
                              >
                                <thead>
                                  <tr>
                                    <th>Producto</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Total</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#"
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      id="linkImprimir"
                    >
                      Imprimir
                    </a>
                    <button
                      className="btn btn-danger btn-sm"
                      type="button"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
            <span>Todos los derechos reservados © Proyecto 2024 | Lauren & Elkin</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  </>
