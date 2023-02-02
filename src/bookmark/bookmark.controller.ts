import { Controller } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {
    constructor(private bookmark: BookmarkService ) {}

    test(){
        this.bookmark
    }

}
