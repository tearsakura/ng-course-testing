import { FormBuilder } from '@angular/forms';
import { LoginForm } from './formulario';
describe('Prueba de Formulario', () => {

    let loginForm: LoginForm;
    beforeEach(() => loginForm = new LoginForm(new FormBuilder()));

    it('Se debe crear un formulario con dos campos', () => {
        expect(loginForm.form.contains('email')).toBe(true);
        expect(loginForm.form.contains('password')).toBe(true);
    });

    it('El email es obligatorio', () => {
        const controlMail = loginForm.form.get('email');
        controlMail.setValue('');
        expect(controlMail.valid).toBeFalsy();
        expect(controlMail.hasError('required')).toBeTrue();
    });

    it('El email no es válido', () => {
        const controlMail = loginForm.form.get('email');
        controlMail.setValue('kklllll');
        expect(controlMail.valid).toBeFalse();
        expect(controlMail.hasError('required')).toBeFalse();
        expect(controlMail.hasError('email')).toBeTrue();

    });

    it('El email es válido', () => {
        const controlMail = loginForm.form.get('email');
        controlMail.setValue('kk@ll.com');
        expect(controlMail.valid).toBeTrue();
        expect(controlMail.hasError('required')).toBeFalse();
        expect(controlMail.hasError('email')).toBeFalse();

    });
});