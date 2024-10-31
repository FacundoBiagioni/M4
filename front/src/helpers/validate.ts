import { ILoginErrors, ILoginProps } from "@/types";
import { TRegisterErrors, IRegisterProps } from "@/types";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginErrors = {}

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } else if (values.password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
        errors.password = "The password requires a minimum of eight characters, at least one uppercase letter, one lowercase letter, and one number."
    }

    return errors;

}

export function validateRegisterForm(values: IRegisterProps) {
    const errors: TRegisterErrors = {}

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    }

    return errors;

}
