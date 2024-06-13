import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArbitroService } from 'src/app/services/Arbitro/arbitro.service';

@Component({
  selector: 'app-registro-arbitro',
  templateUrl: './registro-arbitro.component.html',
  styleUrls: ['./registro-arbitro.component.css']
})
export class RegistroArbitroComponent {

  constructor(private router: Router, private fb: FormBuilder, private ArbitroService: ArbitroService){

  }


  formArbitro =this.fb.group({
    'name': ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(45)]], // Permite solo letras y espacios
    'surname1': ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(30)]],
    'surname2': ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(30)]],
    'email': ['', [Validators.required, Validators.email,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]], // Verifica el formato de correo electrónico
    'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    'age': ['', [Validators.required, Validators.min(16), Validators.max(55)]], // Permite solo números
    'phone': ['', [Validators.required, Validators.minLength(9), Validators.maxLength(12), Validators.pattern('[0-9]*')]], // Permite solo números,
    'experiences': ['', [Validators.required]],
    'disponibilidad': ['',  [Validators.required]]
  });


  public crearArbitro() {
    this.ArbitroService.registarArbitro(this.formArbitro.value)
      .subscribe(
        (response) => {
          console.log('Arbitro creado:', response);
          this.router.navigate(['/Login']);
          // Puedes agregar aquí lógica adicional después de enviar el formulario
        },
        (err : any) => {
          console.error('Error al crear el arbitro:', err);
          // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
        }
      );
  }
}
