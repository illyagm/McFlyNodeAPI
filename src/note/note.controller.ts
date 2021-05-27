import { Body, Controller, Get, Post } from '@nestjs/common';

import { NoteService } from './note.service';

import { CreateNoteDto } from '../dto/create-note.dto';

import { Note } from '../interfaces/note.interface';

@Controller('note')
export class NoteController {
    constructor(private readonly notesService: NoteService) {}

    @Post()

    async create(@Body() createNoteDto: CreateNoteDto) {
   
      this.notesService.create(createNoteDto);
      return "created successfully"
   
    }

    @Get()

    async findAll(): Promise<Note[]> {
   
      return this.notesService.findAll();
   
    }
}
