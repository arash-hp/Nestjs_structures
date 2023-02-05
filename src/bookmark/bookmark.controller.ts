import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Bookmark } from './bookmark.model';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    // http://localhost:3000/bookmark
    @Get()
    find(@Query() getBookmarkDto: GetBookmarkDto) {
        if (Object.keys(getBookmarkDto).length) {
            return this.bookmarkService.find(getBookmarkDto)
        }
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

    @Delete('/:id')
    deleteBookmark(@Param('id') id: string): void {
        return this.bookmarkService.deleteBookmark(id)
    }

    @Patch('/:id/title')
    updateBookmarkTitle(@Param('id') id: string, @Body('title') title: string) {
        return this.bookmarkService.updateBookmarkTitle(id, title)
    }
}
