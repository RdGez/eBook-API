import { Module } from '@nestjs/common';
import { EbooksService } from './ebooks.service';
import { EbooksController } from './ebooks.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Ebook } from './entities/ebook.entity';
import { CategoriesModule } from '../categories/categories.module';
import { CommonModule } from '../common/common.module';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ebook]),
    CommonModule,
    FilesModule,
    CategoriesModule,
  ],
  controllers: [EbooksController],
  providers: [EbooksService],
  exports: [EbooksService, TypeOrmModule],
})
export class EbooksModule {}
