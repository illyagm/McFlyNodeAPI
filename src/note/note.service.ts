import { Injectable } from '@nestjs/common';
import { Note } from '../interfaces/note.interface';
@Injectable()
export class NoteService {
    private readonly notes: Note[] = [];

    create(note: Note) {

        this.notes.push(note);

    }

    findAll(): Note[] {

        return this.notes;
     
      }


}
