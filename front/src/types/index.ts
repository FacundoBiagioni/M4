export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ILoginProps {
    email: string;
    password: string;
}

export interface ILoginErrors {
    email?: string;
    password?: string;
}

export interface IRegisterProps {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export interface IRegisterErrors {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
  }

// General type for validation errors that can be used for login and register
export type IValidationErrors = Partial<ILoginProps & IRegisterProps>;

// General validation result type that can be reused for both login and register
export interface IValidationResult {
    valid: boolean;
    errors: IValidationErrors;
}

export interface IUserSession {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        role: string;
        credential: {
            id: number;
            password: string;
        };
    };

}

export interface IUserOrder {
    id: number;
    status: string;
    date: Date;
    products: IProduct[]
}
    