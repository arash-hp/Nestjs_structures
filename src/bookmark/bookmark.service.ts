import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookmarkService {
    private bookmark:Bookmark[]=[{
        id:uuid(),
        title:'Arash'
    }]

    // TODO : inja type return nazari mifahme ?
    findAll():Bookmark[]{
        return this.bookmark
    }
}
