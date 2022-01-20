import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <div className="layout">
      {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
      <nav>
        <li>
          <Link to="/form">Foglalok!</Link>
        </li>
      </nav>
      {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;

/*
return (
  <nav>
    <Link to="/form" className="booking">
      Foglalok!
    </Link>
  </nav>
);*/
