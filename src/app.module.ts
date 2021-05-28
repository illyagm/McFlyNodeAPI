import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NoteModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
 