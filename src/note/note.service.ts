import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Note, NoteDocument } from './schemas/note.schema';
import { CreateNoteDto } from './dto/create-note.dto';
@Injectable()
export class NoteService {
    private readonly notes: Note[] = [];
    constructor(
        @InjectModel(Note.name) private noteModel: Model<NoteDocument>,
        @InjectConnection() private connection: Connection
        ){}


    //async create
    async create(createNoteDto: CreateNoteDto): Promise<Note> {

        const createdNote = new this.noteModel(createNoteDto);
        return createdNote.save();

    }

    async findAll(): Promise<Note[]> {

        return this.noteModel.find().exec();
     
      }


}
