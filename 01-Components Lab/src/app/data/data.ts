import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articles : Article[] = [];

        for (const article of data) {
            articles.push(new Article(article.title, article.description, article.author, article.imageUrl));
        }

        return articles;
    }

}