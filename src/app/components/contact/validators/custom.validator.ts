import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function validatePhoneNumber():ValidatorFn
{
    return (fromControlValue:AbstractControl):ValidationErrors | null => {
        const phoneNumber = fromControlValue.value;
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;

        if(!phoneNumber) return null;
        const isValid = phoneRegex.test(phoneNumber);

        return (isValid) ? null : {invalidPhoneNumber: phoneNumber}
    }
}