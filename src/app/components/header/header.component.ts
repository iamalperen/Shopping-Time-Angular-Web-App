import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart$: Observable<number>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
