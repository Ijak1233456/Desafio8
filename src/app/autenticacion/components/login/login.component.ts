import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  value = 'Clear me';

  constructor(private formBuilder: FormBuilder, private router: Router, private sesionService: SesionService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user:['', Validators.required],
      pass:['', Validators.required]
    });
  }

  login(){

    let user = this.form.controls['user'].value;
    let contrasena = this.form.controls['pass'].value;

    // this.sesionService.iniciarSesion().pipe(
    //   map((usuario: Usuario) => { 
    //     usuario.usuario === this.form.controls['user'].value && usuario.contrasena === this.form.controls['pass'].value
    //   })
    // ).subscribe()
    this.sesionService.setCredenciales(user, contrasena);

    this.router.navigate(['/home']);
  }

}
