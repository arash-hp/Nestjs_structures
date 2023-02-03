import { Body, Controller, Get, Post } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    @Get()
    test() {
        return this.bookmarkService.findAll()
    }

    @Post()
    createBookmark(@Body('url') url,@Body('title')title):Bookmark {
    return this.bookmarkService.createBookmark(url,title)
    }

}
