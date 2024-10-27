export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ILoginProps {
    email: string,
    password: string,
}

export interface ILoginErrors {
    email?: string,
    password?: string,
}

export interface IRegisterProps {
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string,
}

export type TRegisterErrors = Partial<IRegisterProps>