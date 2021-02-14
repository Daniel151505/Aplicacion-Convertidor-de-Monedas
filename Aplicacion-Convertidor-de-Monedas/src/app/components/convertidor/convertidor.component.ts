import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  cantidad = 0
  tengo = 'USD'
  quiero = 'EUR'
  total = 0

  monedas: string [] = ['USD', 'EUR', 'LIBRA', 'SOLES']

  constructor() { }

  ngOnInit(): void {
  }

  convertir(){

    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad
        }

        if (this.quiero === 'EUR') {
            this.total = this.cantidad * 0.83
        }

        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.72
        }

        if (this.quiero === 'SOLES') {
          this.total = this.cantidad * 3.64
        }
        
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.21
        }

        if (this.quiero === 'EUR') {
            this.total = this.cantidad
        }

        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.88
        }

        if (this.quiero === 'SOLES') {
          this.total = this.cantidad * 4.42
        }
          
        break;  
      case 'LIBRA':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.38
        }

        if (this.quiero === 'EUR') {
            this.total = this.cantidad * 1.14
        }

        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad
        }

        if (this.quiero === 'SOLES') {
          this.total = this.cantidad * 5.04
        }
            
        break; 
      case 'SOLES':
          if (this.quiero === 'USD') {
            this.total = this.cantidad * 0.27
          }
  
          if (this.quiero === 'EUR') {
              this.total = this.cantidad * 0.23
          }
  
          if (this.quiero === 'LIBRA') {
            this.total = this.cantidad * 0.20
          }

          if (this.quiero === 'SOLES') {
            this.total = this.cantidad
          }
            
        break;   
    
    }

  }

}
