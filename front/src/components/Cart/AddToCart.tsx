'use client'
import { IProduct, IUserSession } from '@/types';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface IAddToCartProps {
    product: IProduct;
}

const AddToCart: React.FC<IAddToCartProps> = ({ product }) => {
    const [userSession, setUserSession] = useState<IUserSession | null>(null);
    const [isClient, setIsClient] = useState(false); // Para saber si estamos en el cliente
    const router = useRouter();
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    useEffect(() => {
        const dataCookie = Cookies.get("userData");
        if (dataCookie) {
            const parsedData: IUserSession = JSON.parse(dataCookie);
            setUserSession(parsedData);
        } else {
            setUserSession(null);
        }
    }, []);

    const handleAdd = async () => {
        if (userSession) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            // Validar si el producto ya EXISTE en el carrito
            // si ya exite, no agregarlo de vuelta
            // si no existe, agregarlo 
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            await Swal.fire({
                icon: "success",
                title: "Success",
                text: "Product added to cart",
            });
            if (isClient) {
                router.push("/cart");  // Aquí es donde redirige a la página de carrito
            }
        } else {
            await Swal.fire({
                icon: "warning",
                title: "Action required",
                text: "You must log in to add products"
            });
            if (isClient) {
                router.push("/login");  // Si no está logueado, redirige a login
            }
        }
    };

    if (!isClient) return null; // Asegúrate de que el componente solo renderice en el cliente

    return (
        <button
            type="button" className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
            onClick={handleAdd}
        >
            Add to cart
        </button>
    );
};

export default AddToCart;
