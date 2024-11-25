"use client"
import React from "react";
import { IUserSession } from "@/types";
import OrderList from "@/components/Dashboard/OrderList";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export const ProfileView: React.FC = () => {

    const userData: IUserSession = JSON.parse(Cookies.get("userData") || "{}")
    const router = useRouter() 
     
      const handleLogout = async () => {
        Cookies.remove("userData");
        await Swal.fire({
            title: "Logged out",
            icon: "success",
            text:"You have successfully logged out"
        })
        router.push("/")
      }

    return (
        //! comletar esto y tambien agregarle estilos
        <div>
            <h1>Tu perfil</h1>

            <div>
                <p>
                    <strong>Name:</strong> {userData?.user.name}
                </p>
            </div>
            <div>
                <p>
                    <strong>Email:</strong> {userData?.user.email}
                </p>
            </div>
            <div>
                <h1>My orders</h1>
                <OrderList userToken={userData?.token} />
            </div>
            <div>
               <button onClick={handleLogout} className="text-blue-700">close session</button>
            </div>
        </div>
        
    )
}

export default ProfileView