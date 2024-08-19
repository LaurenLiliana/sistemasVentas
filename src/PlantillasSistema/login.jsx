<div className="container">
  <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Bienvenido</h1>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      placeholder="Correo"
                      asp-for="Correo"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-user"
                      placeholder="Contraseña"
                      asp-for="Clave"
                    />
                  </div>
                  <div className="form-group">
                    <div className="custom-control custom-checkbox small">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="chkMantenerSesion"
                        asp-for="MantenerSesion"
                      />
                      <label
                        className="custom-control-label"
                        id="chkMantenerSesion"
                      >
                        Mantener Sesión
                      </label>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary btn-user btn-block"
                    href="#"
                  >
                    Ingresar
                  </a>
                </form>
                <hr />
                <div className="text-center">
                  <a className="small" href="#">
                    ¿Olvidó su contraseña?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>