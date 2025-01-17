import { FormControl } from "@angular/forms";

export function PasswordValidator(control: FormControl) {

      let hasDigit = /\d/.test(control.value);
      let hasUpper = /[A-Z]/.test(control.value);
      let hasLower = /[a-z]/.test(control.value);
      let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(control.value );
      // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
      const valid = hasDigit && hasUpper && hasLower && specialChars;
      if (!valid)
      {
       // return whatÂ´s not valid
          return { strong: true };
      }
      return null;
  }

