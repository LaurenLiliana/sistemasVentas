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
          <div className="row">
            <div className="col-sm-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3 bg-second-primary">
                  <h6 className="m-0 font-weight-bold text-white">
                    <i className="fas fa-user" /> Mis Datos
                  </h6>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <img
                          id="imgFoto"
                          src="https://elcomercio.pe/resizer/h6cBZHzuQQ5pYVtHKKIKBRVNN38=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NG4OXH2E65FZLDFCYTHPSGJT5Q.png"
                          className="rounded mx-auto d-block"
                          style={{ width: 200, height: 200 }}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txtNombre">Nombre</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          disabled=""
                          id="txtNombre"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txtCorreo">Correo</label>
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="txtCorreo"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txTelefono">Telefono</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="txTelefono"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txtRol">Rol</label>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          disabled=""
                          id="txtRol"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-block"
                          id="btnGuardarCambios"
                        >
                          Guardar Cambios
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3 bg-second-primary">
                  <h6 className="m-0 font-weight-bold text-white">
                    <i className="fas fa-key" /> Cambiar Contraseña
                  </h6>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txtClaveActual">
                          Contraseña Actual
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-sm input-validar"
                          id="txtClaveActual"
                          name="Clave Actual"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txtClaveNueva">Nueva Contraseña</label>
                        <input
                          type="password"
                          className="form-control form-control-sm input-validar"
                          id="txtClaveNueva"
                          name="Clave Nueva"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-sm-12">
                        <label id="txtConfirmarClave">
                          Confirmar Contraseña
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-sm input-validar"
                          id="txtConfirmarClave"
                          name="Confirmar Clave"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          type="button"
                          className="btn btn-success btn-sm btn-block"
                          id="btnCambiarClave"
                        >
                          Guardar Cambios
                        </button>
                      </div>
                    </div>
                  </form>
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
