"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { IUserSession } from "@/types";

export const ProfileView: React.FC = () => {
    const [userData, setUserData] = useState<IUserSession| null>(null);
    useEffect(() => {
        const dataCookie = Cookies.get("userData");
        if (dataCookie) {
            const parsedData: IUserSession = JSON.parse(dataCookie);
            setUserData(parsedData);
        }
      }, [])
      
      console.log(userData)

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
            <p>Dirección</p>
            <p>Numero de telefono</p>
        </div>
    )
}

export default ProfileView