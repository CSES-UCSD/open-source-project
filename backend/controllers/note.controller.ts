import Note from "../models/note.models";
import r2 from "../utils/r2";
import { Request, Response, NextFunction } from "express";

export function test(req: Request, res: Response) {
  res.json({
    message: "API is working!",
  });
}

// get all notes at the same time and sort by recent on top 
export async function notes(req: Request, res: Response, next: NextFunction) {
  try {
    //sort by updatedAt vs createdAt;
    const notes = await Note.find().sort({updatedAt: -1});
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
}

// search database for notes that contain name.
export async function searchForNoteByName(req: Request, res: Response, next: NextFunction){
    try {
      const regex = new RegExp(req.params.name, "i")  
      const events = await Note.find({ note_id: regex });
        res.status(200).json(events);
        
      } catch (error) {
        next(error);
      }
}

// update user
export async function upload(req: Request, res: Response, next: NextFunction) {
  try {
    const rest = await r2.url("cses", req.params.id);
    const { title, classInfo, description, isPublic, uploader, currentUser } = req.body;
    const newNote = new Note({
      note_id: req.params.id,
      title,
      classInfo,
      description,
      isPublic: true,
      uploader,
      file_id: req.params.id,
    });
    await newNote.save();
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}




