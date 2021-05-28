import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Note, NoteDocument } from '../schemas/note.schema';
import { CreateNoteDto } from '../dto/create-note.dto';
@Injectable()
export class NoteService {

    private readonly notes: Note[] = [];
    @InjectModel(Note.name) private noteModel: typeof Model
    @InjectConnection() private connection: typeof Connection
    


    //create new note
    async create(createNoteDto: CreateNoteDto): Promise<Note> {

        const createdNote = new this.noteModel(createNoteDto);
        console.log(createdNote);
        return await createdNote.save();

    }

    //set note as favorite
    async setFavorite(noteId: string): Promise<any> {


        const noteCheckFavorite = await this.noteModel.findById({ _id: noteId });


        console.log(!noteCheckFavorite.isFavorite);
        
        if (!noteCheckFavorite.isFavorite) {

            const noteSetFavorite = await this.noteModel.findByIdAndUpdate(noteId, { isFavorite: true });

            return noteSetFavorite;

        } else if (noteCheckFavorite.isFavorite) {

            const noteSetFavorite = await this.noteModel.findByIdAndUpdate(noteId, { isFavorite: false });

            return noteSetFavorite;

        } else {

            return 'Something went wrong...'

        }


    }

    //find all notes
    async findAll(): Promise<Note[]> {

        return await this.noteModel.find().exec();

    }
    //find one note by id
    async findById(noteId: string): Promise<Note> {

        return await this.noteModel.findById({ _id: noteId }).exec();

    }
    //find all notes marked as favorite
    async findAllFavorites(): Promise<Note[]> {

        return await this.noteModel.find({ isFavorite: true });

    }


}
