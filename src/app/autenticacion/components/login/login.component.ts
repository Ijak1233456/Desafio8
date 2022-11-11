import { Sesion } from './../../../models/sesion';
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
      user:['Deshawn.Turner', Validators.required],
      pass:['V4t1aMLegb1k82B', Validators.required]
    });
  }

  login(){

    let user = this.form.controls['user'].value;
    let contrasena = this.form.controls['pass'].value;

    this.sesionService.login(user, contrasena).subscribe({
      next: (usuario) => {
        if (usuario){
          console.log(usuario);
          
          this.sesionService.setSesion(usuario);
        }
      }
    });

    this.router.navigate(['/home']);
  }

}
