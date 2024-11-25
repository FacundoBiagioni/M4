import { ILoginProps, IProduct, IRegisterProps } from "@/types";
import Swal from "sweetalert2";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function  register (formData: IRegisterProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify(formData),
            });

            if (!res.ok) {
                alert("Hubo un error")
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            } else {
                  await Swal.fire({
                      title: "Éxito!",
                      text: "Registrado con éxito",
                      icon: "success",
                      confirmButtonText: "Aceptar", 
                  });
                return res.json();
            }
        } catch (error) {
            console.log(error);
              await Swal.fire({
                  title: "Érror!",
                  text: "Este mail ya fue utilizado para crear un usuario. Por favor ingresa un mail diferente.",
                  icon: "error",
                  confirmButtonText: "Aceptar",
              });
        }
}

export async function  login (formData: ILoginProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body:JSON.stringify(formData),
            });

            if (!res.ok) {
                alert("Hubo un error")
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            } else {
                  await Swal.fire({
                      title: "Éxito!",
                      text: "Registrado con éxito",
                      icon: "success",
                      confirmButtonText: "Aceptar", 
                  });
                return res.json();
            }
        } catch (error) {
            console.log(error);
              await Swal.fire({
                  title: "Érror!",
                  text: "Este mail ya fue utilizado para crear un usuario. Por favor ingresa un mail diferente.",
                  icon: "error",
                  confirmButtonText: "Aceptar",
              });
        }
}