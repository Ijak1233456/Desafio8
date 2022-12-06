import { Sesion } from './../../../models/sesion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Usuario } from 'src/app/models/usuario';
import { Store } from '@ngrx/store';
import { loadSesionActiva } from 'src/app/core/state/actions/sesion.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  value = 'Clear me';

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private sesionService: SesionService,
    private store: Store<Sesion>
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      user:['Winifred41', Validators.required],
      pass:['qbuzhtlq9TTUIp9', Validators.required]
    });
  }

  login(){

    let user = this.form.controls['user'].value;
    let contrasena = this.form.controls['pass'].value;

    this.sesionService.login(user, contrasena).subscribe({
      next: (usuario) => {
        if (usuario){
          
          this.store.dispatch(loadSesionActiva({usuario: usuario}));
          //this.sesionService.setSesion(usuario);
          this.router.navigate(['home']);
        }
      }
    });    
  }

}
