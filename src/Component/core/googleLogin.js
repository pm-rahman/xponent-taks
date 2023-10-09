"use client";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import GoogleIcon from "../icons/google-icon";

const GoogleLogin = () => {
  const [isLogoutShow, setIsLogoutShow] = useState(false);
  const { user, googleUser, logout } = useContext(AuthContext);
  const { replace } = useRouter();
  // google handler function
  const googleLoginHandler = () => {
    googleUser()
      .then((data) => {
        const loggedUser = {
          name: data?.user?.displayName,
          email: data?.user?.email,
        };
        console.log(loggedUser);
        // add user in mongodb
        fetch(`/api/user`, {
          method: "PATCH",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then(() => {
            replace("/");
            setIsLogoutShow(false)
          })
          .catch((err) => {
            console.log(err);
            setIsLogoutShow(false)
          });
      })
      .catch((err) => {
        console.log(err);
        setIsLogoutShow(false)
      });
  };
  const logoutHandler = () => {
    logout().then(() => {
      replace("/");
      setIsLogoutShow(false)
    });
  };
  return (
    <>
      {!user ? (
        <button
          onClick={googleLoginHandler}
          className="border px-3 py-2 rounded flex gap-1 items-center hover:bg-blue-50 duration-300"
        >
          <GoogleIcon/> Login
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={()=>setIsLogoutShow(!isLogoutShow)}
            className="border px-4 py-2 rounded hover:bg-blue-50"
          >
            {user?.displayName}
          </button>
          <div
            className={`scale-0 ${
              isLogoutShow && "scale-100"
            } absolute top-[110%] sm:right-0 flex flex-col w-32 rounded border`}
          >
            <button
              onClick={logoutHandler}
              className="text-left flex items-center gap-1 px-3 py-1 bg-white w-full hover:bg-blue-50"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleLogin;
