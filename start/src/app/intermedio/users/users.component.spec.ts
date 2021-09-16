import { UsersService } from './users.service';
import { UsersComponent } from './users.component';
import { EMPTY, of, throwError } from 'rxjs';
describe('UsersComponent', () => {

    let component: UsersComponent;
    const service =  new UsersService(null);
    beforeEach(() => component = new UsersComponent(service));

    it('Se debe cargar los usuarios', () => {

        //Fake response to return
        const users = ['Emilio', 'Juan', 'Luis'];

        //interceptamos getUsers en service
        spyOn(service, 'getUsers').and.callFake(() => {
            return of(users);
        });
        component.ngOnInit();
        expect(component.users.length).toBeGreaterThan(0);
    });

    it('addUser invoca el metodo del API', () => {
        
        const spy = spyOn(service, 'addUser').and.callFake(() => {
            //Observable vacío que nunca se completa
            return EMPTY;
        });
        
        component.addUser();
        //comprobamos que cuando se ejecuta addUser se ha ejecutado en el servicio
        expect(spy).toHaveBeenCalled();
    });

    it('addUser invoca el metodo del API y el usuario se ha añadido', () => {

        const user = { id: 1, name: 'Emilio' };
        
        spyOn(service, 'addUser').and.callFake(() => {
            //Observable del usuario
            return of(user);
        });
        
        component.addUser();
        //comprobamos que cuando se ejecuta addUser se ha añadido el usuario
        expect(component.users.indexOf(user)).toBeGreaterThanOrEqual(0);
    });

    it('Si addUser falla tenemos el error devuelto por el servicio', () => {
        const error = "error";

        // cuando no se necesita llamar a la función, solo que devuelva el error
        /*
        spyOn(service, 'addUser').and.returnValue( throwError(error) );*/
        
        spyOn(service, 'addUser').and.callFake(() => {
            //Observable del usuario
            return throwError(error);
        });
        
        component.addUser();
        //comprobamos que cuando se ejecuta addUser se ha añadido el usuario
        expect(component.errorMessage).toBe(error);
    });

    it('deleteUser debe invocar el delete del servicio', () => {
        const spy = spyOn(service, 'deleteUser').and.returnValue( EMPTY );

        //intercepta el prompt para no parar la ejecucion de los test
        spyOn(window, 'confirm').and.returnValue(true);
        const id = '1';
        component.deleteUser(id);
        //comprobamos que cuando se ejecuta addUser se ha ejecutado en el servicio
        expect(spy).toHaveBeenCalledWith(id);
    });
});