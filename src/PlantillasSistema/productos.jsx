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
      <li className="nav-item active">
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
      <li className="nav-item">
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
                Lista de Productos
              </h6>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#modalData"
                  >
                    <i className="fas fa-plus-circle" /> Nuevo Producto
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  <table
                    className="table table-bordered"
                    id="tbdata"
                    cellSpacing={0}
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Codigo Barra</th>
                        <th>Marca</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <img
                            style={{ height: 60 }}
                            src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300"
                            className="rounded mx-auto d-block"
                          />
                        </td>
                        <td>12312312</td>
                        <td>Marca 1</td>
                        <td>Descripcion 1</td>
                        <td>Categoria 1</td>
                        <td>120</td>
                        <td>120</td>
                        <td>
                          <span className="badge badge-info">Activo</span>
                        </td>
                        <td>
                          <button className="btn btn-primary btn-sm">
                            <i className="fas fa-pencil-alt" />
                          </button>
                          <button className="btn btn-danger btn-sm">
                            <i className="fas fa-trash-alt" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <img
                            style={{ height: 60 }}
                            src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300"
                            className="rounded mx-auto d-block"
                          />
                        </td>
                        <td>12312312</td>
                        <td>Marca 2</td>
                        <td>Descripcion 2</td>
                        <td>Categoria 2</td>
                        <td>100</td>
                        <td>140</td>
                        <td>
                          <span className="badge badge-danger">No Activo</span>
                        </td>
                        <td>
                          <button className="btn btn-primary btn-sm">
                            <i className="fas fa-pencil-alt" />
                          </button>
                          <button className="btn btn-danger btn-sm">
                            <i className="fas fa-trash-alt" />
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
                  <h6>Detalle Producto</h6>
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
                    <input type="hidden" defaultValue={0} id="txtId" />
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="form-row">
                          <div className="form-group col-sm-6">
                            <label id="txtCodigoBarra">Codigo Barra</label>
                            <input
                              type="text"
                              className="form-control form-control-sm input-validar"
                              id="txtCodigoBarra"
                              name="Codigo Barra"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label id="txtMarca">Marca</label>
                            <input
                              type="text"
                              className="form-control form-control-sm input-validar"
                              id="txtMarca"
                              name="Marca"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-sm-12">
                            <label id="txtDescripcion">Descripcion</label>
                            <input
                              type="text"
                              className="form-control form-control-sm input-validar"
                              id="txtDescripcion"
                              name="Descripcion"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-sm-6">
                            <label id="cboCategoria">Categoria</label>
                            <select
                              className="form-control form-control-sm"
                              id="cboCategoria"
                            >
                              <option value={0}>seleccionar</option>
                            </select>
                          </div>
                          <div className="form-group col-sm-6">
                            <label id="txtStock">Stock</label>
                            <input
                              type="text"
                              className="form-control form-control-sm input-validar"
                              id="txtStock"
                              name="Stock"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-sm-6">
                            <label id="txtPrecio">Precio</label>
                            <input
                              type="text"
                              className="form-control form-control-sm input-validar"
                              id="txtPrecio"
                              name="Precio"
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label id="cboEstado">Estado</label>
                            <select
                              className="form-control form-control-sm"
                              id="cboEstado"
                            >
                              <option value={1}>Activo</option>
                              <option value={0}>No Activo</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-sm-6">
                            <label id="txtImagen">Imagen</label>
                            <input
                              className="form-control-file"
                              type="file"
                              id="txtImagen"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <img
                          id="imgProducto"
                          style={{ maxWidth: 200 }}
                          src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300"
                          className="rounded mx-auto d-block"
                          alt="..."
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    id="btnGuardar"
                  >
                    Guardar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
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
