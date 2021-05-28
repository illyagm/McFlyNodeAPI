import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteController } from './controllers/note.controller';
import { NoteService } from './services/note.service';
import { Note, NoteSchema } from './schemas/note.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])],
  controllers: [NoteController],
  providers: [NoteService]
})
export class NoteModule {}
