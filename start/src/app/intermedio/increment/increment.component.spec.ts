import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IncrementComponent } from './increment.component';
describe('IncrementComponent', () => {
  let component: IncrementComponent;
  //permite acceder al DOM
  let fixture: ComponentFixture<IncrementComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Se debe mostrar el título', () => {
    component.title = 'Testing title';
    fixture.detectChanges();
    const elementsHTMLH3InTheCSS: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elementsHTMLH3InTheCSS.innerHTML).toContain(component.title);
  });

  it('Se debe mostrar en el input el valor del progreso', () => {
    const five = 5;
    component.changeValue(five)
    //para el databinding pero para el two-way binding (banana in a box) necesitamos una promesa que tiene el fixture
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

    //angular ha terminado los ciclos y podemos comprobar el two-way binding
    fixture.whenStable().then( () => {
      expect(input.value).toBe('55');

    });
  });

  it('Se debe incrementar en 5 al hacer click en el botón', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn'));
    console.log(buttons);
    buttons[0].triggerEventHandler('click', null);
    expect(component.progress).toBe(45);
  });
});