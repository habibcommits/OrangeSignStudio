// server/blob.ts
import { put, list } from '@vercel/blob';
import path from 'path';

// Upload file buffer to Vercel Blob
export async function uploadToBlob(
  file: Express.Multer.File,
  folder: string = 'uploads'
) {
  const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(
    file.originalname
  )}`;
  const blob = await put(`${folder}/${filename}`, file.buffer, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN, // Vercel auto-injects
  });

  return blob.url; // e.g. https://...blob.vercel-storage.com/uploads/123.jpg
}

// Optional: List all uploaded files (for admin panel later)
export async function listBlobs() {
  const { blobs } = await list();
  return blobs;
}