import { ILoginErrors, ILoginProps, IValidationResult, IValidationErrors } from "@/types";
import { IRegisterProps } from "@/types";

// Valida el formulario de login
export function validateLoginForm(values: ILoginProps): IValidationResult {
    const errors: IValidationErrors = {};

    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid";
    }

    if (values.password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
        errors.password = "The password requires a minimum of eight characters, at least one uppercase letter, one lowercase letter, and one number.";
    }

    // El formulario es válido si no hay errores
    const valid = Object.keys(errors).length === 0;

    return {
        valid,
        errors
    };
}

// Valida el formulario de registro
export function validateRegisterForm(values: IRegisterProps): IValidationResult {
    const errors: IValidationErrors = {};

    // Validación de email
    if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid";
    }

    // Validación de nombre (opcional, puedes agregar más reglas aquí)
    if (values.name && values.name.length < 3) {
        errors.name = "Name should be at least 3 characters long";
    }

    // Validación de dirección (opcional, puedes agregar más reglas aquí)
    if (values.address && values.address.length < 5) {
        errors.address = "Address should be at least 5 characters long";
    }

    // Validación de teléfono (opcional, puedes agregar más reglas aquí)
    if (values.phone && !/^\d{10}$/.test(values.phone)) {
        errors.phone = "Phone number should be 10 digits long";
    }

    // El formulario es válido si no hay errores
    const valid = Object.keys(errors).length === 0;

    return {
        valid,
        errors
    };
}
