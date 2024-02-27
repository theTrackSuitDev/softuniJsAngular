import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDesc!: string;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';

  readMore(): void {
    this.articleDescLen += this.symbols;
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);

    if (this.articleDescLen >= this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    if (this.imageButtonTitle === 'Show Image') {
      this.imageButtonTitle = 'Hide Image';
    } else {
      this.imageButtonTitle = 'Show Image';
    }
  }

  hideDesc(): void {
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
