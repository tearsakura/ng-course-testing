import { Cuenta } from "./cuenta";

describe('Prueba de Cuenta Intermedia', () => {

    let cuenta: Cuenta;
    beforeEach(() => cuenta = new Cuenta('Emilio', 100));

    it('Debe devolver el nombre del titular', (done) => {
        let saldo = 100;
        cuenta.cambia.subscribe(data => {
            saldo = data; 
            expect(saldo).toBe(50);
            //necesitamos el callback para emitir en jasmine
            done();
        });

        cuenta.retirar(50);
        expect(cuenta.nombre()).toBe('Cuenta de Emilio');
    });

});