import { Component, inject } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  _ToastrService = inject(ToastrService)

  onWorking() {
    this._ToastrService.warning("didn't finish yet")
  }
}
