import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export function ForbiddenNameValidator(control:AbstractControl) {
   const forbiden=/admin/.test(control.value);
   return forbiden?{'ForbidenName':{value:control.value}}:null

    }

