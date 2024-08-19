import React from 'react';

function Menu({ menus }) {
  return (
    <ul>
      {menus.map((menu, index) => {
        const menucollapse = `menucollapse${index + 1}`;

        return menu.SubMenus.length === 0 ? (
          <li className="nav-item" key={index}>
            <a className="nav-link" href={`/${menu.Controlador}/${menu.PaginaAccion}`}>
              <i className={menu.Icono}></i>
              <span>{menu.Descripcion}</span>
            </a>
          </li>
        ) : (
          <li className="nav-item" key={index}>
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target={`#${menucollapse}`}>
              <i className={menu.Icono}></i>
              <span>{menu.Descripcion}</span>
            </a>
            <div id={menucollapse} className="collapse" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                {menu.SubMenus.map((submenu, subIndex) => (
                  <a className="collapse-item" href={`/${submenu.Controlador}/${submenu.PaginaAccion}`} key={subIndex}>
                    {submenu.Descripcion}
                  </a>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
