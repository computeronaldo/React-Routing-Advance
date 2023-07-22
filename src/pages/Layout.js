import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  //const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/*this can be used to indicate the user that data is being loaded before rendering
         with the loaded data.*/}
        {/* {navigation.state === 'loading' && <p>loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
