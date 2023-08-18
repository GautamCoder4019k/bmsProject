import Nav from "./nav";
import { Fragment } from "react";
const Layout = (props) => {
  return (
    <Fragment>
      <Nav />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
