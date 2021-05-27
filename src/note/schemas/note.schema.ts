import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema({
    timestamps: true
})
export class Note {
    @Prop()
    text: string;

    @Prop()
    isFavorite: boolean;
  
}

export const NoteSchema = SchemaFactory.createForClass(Note);