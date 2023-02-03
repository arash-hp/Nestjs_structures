import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarkService {
    private bookmark: Bookmark[] = []

    // TODO : inja type return nazari mifahme ?
    findAll(): Bookmark[] {
        return this.bookmark
    }

    findById(id:string):Bookmark{
        return this.bookmark.find(item => item.id == id)
    }

    createBookmark(createBookmarkDto: CreateBookmarkDto): Bookmark {
        const { title, url } = createBookmarkDto
        const bookmark: Bookmark = {
            id: uuid(),
            title,
            url,
        }
        this.bookmark.push(bookmark);
        return bookmark;
    }
}
