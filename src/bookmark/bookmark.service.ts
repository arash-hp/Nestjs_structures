import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { v4 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Injectable()
export class BookmarkService {
    private bookmark: Bookmark[] = []

    // TODO : inja type return nazari mifahme ?
    findAll(): Bookmark[] {
        return this.bookmark
    }

    find(getBookmarkDto: GetBookmarkDto): Bookmark[] {
        let bookmarks = this.findAll();
        const { url, title } = getBookmarkDto

        if (url) {
            bookmarks = bookmarks.filter(item => item.url.toLowerCase().includes(url))

        }

        if (title) {
            bookmarks = bookmarks.filter(item => item.title.toLowerCase().includes(title))

        }
        return bookmarks
    }

    findById(id: string): Bookmark {
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

    deleteBookmark(id: string): void {
        this.bookmark = this.bookmark.filter(item => item.id !== id)
    }

    updateBookmarkTitle(id: string, title: string): Bookmark {
        const bookmark = this.findById(id);
        bookmark.title = title;
        return bookmark;
    }
}
