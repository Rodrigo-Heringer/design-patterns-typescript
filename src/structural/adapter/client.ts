import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/EmailValidatorProtocol';
import { EmailValidatorClassAdapter } from './validation/EmailValidatorClassAdapter';
import { emailValidatorFnAdapter } from './validation/EmailValidatorFnAdapter';

const email = 'rodrigo.musico@gmail.com';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email é inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('Email é inválido (FN)');
  }
}

validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
