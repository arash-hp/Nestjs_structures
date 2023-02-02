import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
    private bookmark=[{
        id:1,
        title:'Arash'
    }]

    findAll(){
        return this.bookmark
    }
}
