import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    // http://localhost:3000/bookmark
    @Get()
    findAll() {
        return this.bookmarkService.findAll()
    }

    // http://localhost:3000/bookmark/id
    @Get('/:id')
    findById(@Param('id') id: string): Bookmark {
        return this.bookmarkService.findById(id)
    }

    @Post()
    createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
        return this.bookmarkService.createBookmark(createBookmarkDto)
    }

}
