# Notes App Back-End

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Hapi.js](https://img.shields.io/badge/Hapi.js-F26722?style=for-the-badge&logo=hapi&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

Back-end sederhana untuk aplikasi catatan yang dibangun menggunakan **Hapi.js**. API ini berfungsi untuk mengelola catatan dengan fitur CRUD (Create, Read, Update, Delete) yang lengkap.

## Fitur

- Menambahkan catatan baru
- Melihat semua catatan
- Melihat detail catatan berdasarkan ID
- Mengubah catatan yang sudah ada
- Menghapus catatan

## Tech Stack

- **Hapi.js** - Framework web untuk Node.js
- **Nanoid** - Generator ID unik untuk setiap catatan
- **ESLint** - Linting untuk menjaga kualitas kode
- **Nodemon** - Auto-reload saat development

## Prerequisites

Pastikan kamu sudah menginstall:

- Node.js (versi 14 atau lebih baru)
- npm atau yarn

## Instalasi

1. Clone repository ini

```bash
git clone https://github.com/edi-mj/note-app-back-end.git
cd note-app-back-end
```

2. Install dependencies

```bash
npm install
```

3. Jalankan server

**Development mode:**

```bash
npm run start:dev
```

**Production mode:**

```bash
npm run start:prod
```

Server akan berjalan di `http://localhost:5000`

## API Endpoints

### 1. Menambahkan Catatan

```
POST /notes
```

**Request Body:**

```json
{
  "title": "Judul Catatan",
  "tags": ["tag1", "tag2"],
  "body": "Isi catatan"
}
```

**Response:**

```json
{
  "status": "succes",
  "message": "Catatan Berhasil Ditambahkan",
  "data": {
    "noteId": "unique-id"
  }
}
```

### 2. Melihat Semua Catatan

```
GET /notes
```

**Response:**

```json
{
  "status": "succes",
  "data": {
    "notes": [...]
  }
}
```

### 3. Melihat Detail Catatan

```
GET /notes/{id}
```

**Response:**

```json
{
  "status": "succes",
  "data": {
    "note": {
      "id": "unique-id",
      "title": "Judul Catatan",
      "tags": ["tag1", "tag2"],
      "body": "Isi catatan",
      "createdAt": "2025-12-31T00:00:00.000Z",
      "updatedAt": "2025-12-31T00:00:00.000Z"
    }
  }
}
```

### 4. Mengubah Catatan

```
PUT /notes/{id}
```

**Request Body:**

```json
{
  "title": "Judul Baru",
  "tags": ["tag-baru"],
  "body": "Isi baru"
}
```

**Response:**

```json
{
  "status": "succes",
  "message": "Catatan berhasil diperbaharui"
}
```

### 5. Menghapus Catatan

```
DELETE /notes/{id}
```

**Response:**

```json
{
  "status": "succes",
  "message": "Catatan berhasil dihapus"
}
```

## Struktur Proyek

```
note-app-back-end/
├── src/
│   ├── handler.js    # Handler untuk setiap endpoint
│   ├── notes.js      # Array penyimpanan catatan (in-memory)
│   ├── routes.js     # Definisi routes API
│   └── server.js     # Konfigurasi dan inisialisasi server
├── eslint.config.mjs # Konfigurasi ESLint
└── package.json      # Dependencies dan scripts
```

## Scripts

- `npm run start:dev` - Menjalankan server dalam mode development dengan auto-reload
- `npm run start:prod` - Menjalankan server dalam mode production
- `npm run lint` - Melakukan pengecekan kode dengan ESLint

## Catatan

- Data catatan disimpan dalam memory (array), sehingga akan hilang ketika server di-restart
- CORS sudah di-enable untuk semua origin
- Server berjalan di port 5000 secara default

---

Dibuat dengan menggunakan Hapi.js
