import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [BookmarkModule],
})
export class AppModule {}
