import {nanoid} from "nanoid";
import notes from "./notes.js";

export const createNote = (req, res, next) => {
    const {name = 'untitled', year, author, summary, publisher, pageCount, readPage, reading} = req.summary;
    const id = nanoid(16);
const insertedAt = new Date().toISOString();
const updatedAt = insertedAt;

    const newNote = {name, year, author, summary, publisher, pageCount, readPage, reading, id, insertedAt, updatedAt};
    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        return res.status(201).json({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {noteId: id}
        });
    }


    return res.status(500).json({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
    });

};


export const getNotes = (req, res) => {
    return res.json({
        status: 'success',
        data: { notes }
    });
};


export const getNoteById = (req, res) => {
    const { id } = req.params;
  const note = notes.find((n) => n.id === id);
  if (note) {
    return res.json({
      status: 'success',
      data: { note }
    });
  }
  return res.status(404).json({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  });
};


/**

{
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
}

 */
