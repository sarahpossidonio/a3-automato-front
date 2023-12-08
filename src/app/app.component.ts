import { AppService } from './app.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, FlexLayoutModule,
    MatToolbarModule, MatInputModule, MatButtonModule, MatIconModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  formulario:FormGroup = new FormGroup({
    valor:new FormControl('')
  })

  resposta="";

  constructor(private appServ:AppService){

  }

  onSubmit(){

    // this.appServ.ola().subscribe(
    //   success=>{
    //     console.log(success)
    //   }
    // )

    this.resposta=""

    this.appServ.verificaAutomato(this.formulario).subscribe(
      success=>{
        this.resposta = success.response;
      },
      erro=>{
        console.log(erro);
      }
    )
  }
}
