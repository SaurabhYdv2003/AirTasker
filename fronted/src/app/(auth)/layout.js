import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authprovider from '@/context/AuthProvider';
const layout = ({ children }) => {
  return (
    <>
      <div>
       <Authprovider>
        <main>{children}</main>
        </Authprovider>
        <ToastContainer />
      </div>
    </>
  );
};

export default layout;
