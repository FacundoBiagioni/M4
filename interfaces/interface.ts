interface IProduct {
id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

interface ICategory {
    id: number;
    name: string;
    products: IProduct[];
}

interface ILogin {
    email: string;
    password: string;
}

interface IUSer {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string;
    // credential?: ICredential;
    orders?: IOrderResponse[];
}

interface ICreateOrder {
    userId: number;
    products: number[];
}

interface IOrderResponse {
    id: number;
    status: string;
    date: string;
    user: IUSer;
    products: IProduct[];
}




interface ICreateCredential {
    password: string;
}

interface ICreateOrder {
    userId: number;
    products: number[];
}

interface ILoginUser {
    email: string
    password: string
}  

interface IRegisterUser {
    name: string
    email: string
    password: string
    address: string
    phone: string
}