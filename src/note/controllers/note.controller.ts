import { Body, Controller, Get, Post } from '@nestjs/common';

import { NoteService } from '../services/note.service';

import { CreateNoteDto } from '../dto/create-note.dto';

import { Note } from '../../interfaces/note.interface';

@Controller('note')
export class NoteController {
  constructor(private readonly notesService: NoteService) { }

  @Get()

  async findAll(): Promise<Note[]> {

    return await this.notesService.findAll();

  }

  @Get('/findById')

  async findById(@Body() noteId: any): Promise<Note> {

    return await this.notesService.findById(noteId.noteId);

  }

  @Get('/allFavorites')

  async findAllFavorites(): Promise<Note[]> {

    return await this.notesService.findAllFavorites();

  }

  @Post('/createNote')

  async create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {

    const noteCreated = await this.notesService.create(createNoteDto);

    return noteCreated;

  }

  @Post('/setFavorite')

  async setFavorite(@Body() noteId: any):Promise<Note> {

    const setNoteFavorite = await this.notesService.setFavorite(noteId.noteId);

    return setNoteFavorite;

  }

}
