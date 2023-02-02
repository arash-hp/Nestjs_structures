import { Controller, Get } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService ) {}

    @Get()
    test(){
      return  this.bookmarkService.findAll();
    }

}
