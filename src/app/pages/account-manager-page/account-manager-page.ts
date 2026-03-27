import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-account-manager-page',
  imports: [],
  templateUrl: './account-manager.html',
  styleUrl: './account-manager.css',
})
export class AccountManagerPage {
  public authService = inject(AuthService);
}