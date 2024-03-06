import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {

  themes: Theme[] = [];
  isLoading = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getThemes().subscribe((dataArray) => {
      this.themes = dataArray;

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);

    });
  }
}
