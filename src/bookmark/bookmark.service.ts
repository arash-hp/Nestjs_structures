import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookmarkService {
    private bookmark: Bookmark[] = [{
        id: uuid(),
        title: 'Arash',
        url: 'http://google.com',
    }]

    // TODO : inja type return nazari mifahme ?
    findAll(): Bookmark[] {
        return this.bookmark
    }

    createBookmark(title:string, url:string) {
        const bookmark = {
            id: uuid(),
            title,
            url,
        }
        this.bookmark.push(bookmark);
        return bookmark;
    }
}
