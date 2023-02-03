import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    @Get()
    test() {
        return this.bookmarkService.findAll()
    }

    @Post()
    createBookmark(@Body() body) {
        console.table(body)
    }

}
