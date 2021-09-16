import {  HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [ UsersService ], //tenemos que inyectar el servicio que usamos en la inicializacion del constructor del component
      imports: [ HttpClientModule] //tenemos que importar la dependencia que usa user service
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});