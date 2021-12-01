import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmittersService } from 'src/app/services/emitters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterContentInit {
  isLogged: boolean = false;
  subscription!: Subscription;
  numero: number = 0;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private emitterService: EmittersService
  ) {
    this.subscription = this.tokenService
      .isLogged()
      .subscribe((logged) => (this.isLogged = logged));
  }

  ngOnInit(): void {}

  ngAfterContentInit() {}

  searchHandler(searchEvent: string) {
    this.emitterService.emitChange(searchEvent);
  }

  logoff() {
    this.tokenService.logout();
    this.router.navigate(['']);
  }
}
