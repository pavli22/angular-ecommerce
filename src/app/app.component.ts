import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from "./Components/products/products.component";
import { HeaderComponent } from "./Components/header/header/header.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ProductsComponent, HeaderComponent, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-Commerce';
  _ToastrService = inject(ToastrService)

}
