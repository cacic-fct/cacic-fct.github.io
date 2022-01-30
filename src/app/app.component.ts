import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página inicial', url: '/home', icon: 'home' },
    { title: 'Pandemia da COVID-19', url: '/pandemia', icon: 'medkit' },
    { title: 'Página dos calouros', url: '/calouros', icon: 'people' },
    { title: 'Manual do calouro', url: '/manual-do-calouro', icon: 'book' },
    { title: 'Transparência', url: '/transparencia', icon: 'folder-open' },
    { title: 'Árvore de links', url: '/links', icon: 'list' },
  ];
  constructor() {}
}
