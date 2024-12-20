import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function validatePhoneNumber():ValidatorFn
{
    return (fromControlValue:AbstractControl):ValidationErrors | null => {
        const phoneNumber = fromControlValue.value;
        const phoneRegex = /(\(\d{3}\)\d{3}-\d{4}|\+\d{11})/;

        if(!phoneNumber) return null;
        const isValid = phoneRegex.test(phoneNumber);

        return (isValid) ? null : {invalidPhoneNumber: phoneNumber}
    }
}