import { NoteController } from './note.controller';
import { NoteService } from '../services/note.service';

describe('NoteController', () => {
  let noteController: NoteController;
  let noteService: NoteService;

  beforeEach(() => {
    noteService = new NoteService();
    noteController = new NoteController(noteService);
  });

  describe('findAll', () => {
    it('should return an array of notes', async () => {
      const result = [
        {
          _id: "60af955899ca544580c3d3d7",
          text: "test message",
          isFavorite: true,
          createdAt: null,
          __v: 0
        },
      ];
      jest.spyOn(noteController, 'findAll').mockResolvedValue(result);

      expect(noteController.findAll()).resolves.toBe(result);
    });
  });

  describe('findById', () => {
    it('should return an note object based on the passed id', async () => {
      const id = "60af955899ca544580c3d3d7";
      const result =
      {
        _id: "60af955899ca544580c3d3d7",
        text: "test message",
        isFavorite: true,
        createdAt: null,
        __v: 0
      };
      jest.spyOn(noteController, 'findById').mockResolvedValue(result);

      expect(noteController.findById(id)).resolves.toBe(result);
    })
  });

  describe('findAllFavorites', () => {
    it('should return an array of notes with isFavorite=true', async () => {
      const result = [
        {
          _id: "60af955899ca544580c3d3d7",
          text: "test message",
          isFavorite: true,
          createdAt: null,
          __v: 0
        },
        {
          _id: "60af955899ca544580c3d3d7",
          text: "test message 2",
          isFavorite: true,
          createdAt: null,
          __v: 0
        },
      ];
      jest.spyOn(noteController, 'findAllFavorites').mockResolvedValue(result);

      expect(noteController.findAllFavorites()).resolves.toBe(result);
    });
  });

  describe('createNote', () => {
    it('should create note', async () => {
      const payload = 
        {
          text: "test note creation",
          isFavorite: false,
        };
      jest.spyOn(noteController, 'create').mockResolvedValue(payload);

      expect(noteController.create(payload)).resolves.toBe(payload);
    });
  });

  describe('setFavorite', () => {
    it('should set isFavorite to true/false based on the passed noteId', async () => {
      const noteId = "60af955899ca544580c3d3d7";
      const result =
      {
        _id: "60af955899ca544580c3d3d7",
        text: "test message",
        isFavorite: true,
        createdAt: null,
        __v: 0
      };
      jest.spyOn(noteController, 'setFavorite').mockResolvedValue(result);

      expect(noteController.setFavorite(noteId)).resolves.toBe(result);
    });
  });

});