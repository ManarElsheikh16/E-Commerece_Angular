import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
export function ConfirmPassVali(control: AbstractControl) {
    const pass = control.get('password')
    const Confpass = control.get('ConfirmPass')
    if (pass?.pristine || Confpass?.pristine) {
        return null
    } else {
        return pass && Confpass && pass.value != Confpass?.value
            ? { MisMatch: true } : null

    }
}

