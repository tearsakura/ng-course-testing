import { Cuenta } from "./cuenta";

describe('Prueba de Cuenta', () => {
    it('Debe devolver el nombre del titular', () => {
        const cuenta = new Cuenta('Emilio', 100);
        expect(cuenta.nombre()).toBe('Cuenta de Emilio');
    });

    it('Debe contener el nombre del titular', () => {
        const titular = 'Emilio';
        const cuenta = new Cuenta(titular, 100);
        expect(cuenta.nombre()).toContain(titular);
    });
});