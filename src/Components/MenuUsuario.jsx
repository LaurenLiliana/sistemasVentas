import React from 'react';

function UserDropdown({ nombreUsuario, urlFotoUsuario }) {
  return (
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">{nombreUsuario}</span>
        <img className="img-profile rounded-circle" src={urlFotoUsuario} alt="User Profile" />
      </a>
      {/* Dropdown - User Information */}
      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
           aria-labelledby="userDropdown">
        <a className="dropdown-item" href="/Perfil">
          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
          Perfil
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/Salir" data-toggle="modal" data-target="#logoutModal">
          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Salir
        </a>
      </div>
    </li>
  );
}

export default UserDropdown;
