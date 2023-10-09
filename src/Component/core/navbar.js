"use client"
import GoogleLogin from "./googleLogin";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import ActiveLink from "./activeLink";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="backdrop-blur-md sticky top-0 z-30">
      <div className="container flex items-center justify-end py-4 gap-5">
        <ul className="flex gap-5">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/all-posts">Posts</ActiveLink>
          </li>
          {user && (
            <li>
              <ActiveLink href="/add-post">Add Post</ActiveLink>
            </li>
          )}
        </ul>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Navbar;
