const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSucces = notes.filter((note) => note.id === id).length > 0;

  if (isSucces) {
    const response = h.response({
      status: 'succes',
      message: 'Catatan Berhasil Ditambahkan',
      data: {
        noteId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan Gagal Ditambahkan',
  });

  response.status(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'succes',
  data: {
    notes,
  },
});

const getAllNotesByIdHandler = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((note) => note.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'succes',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const { title, tags, body } = request.payload;
  const updateAt = new Date().toISOString();

  const index = notes.findIndex((note) => note.id == id);

  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updateAt,
    };

    const response = h.response({
      status: 'succes',
      message: 'Catatan berhasil diperbaharui',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbaharui catatan. id tidak ditemukan',
  });

  response.code(404);
  return response;
};

const deleteNoteByIdHandler = (request, h) => {
  const { id } = request.params;

  const index = notes.findIndex((note) => note.id == id);

  if (index !== -1) {
    notes.splice(index, 1);

    const response = h.response({
      status: 'succes',
      message: 'Catatan berhasil dihapus',
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal menghapus catatan. id tidak ditemukan',
  });

  response.code(404);
  return response;
};

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getAllNotesByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
};
