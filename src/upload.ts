import { ShelbyClient } from "@shelby-xyz/sdk";
import * as fs from "fs";
import * as path from "path";

const client = new ShelbyClient({
  rpcUrl: process.env.SHELBY_RPC || "https://rpc.shelby.xyz",
  network: "testnet",
});

export interface UploadResult {
  blobId: string;
  size: number;
  contentType: string;
  uploadedAt: number;
}

export async function uploadVideoFile(filePath: string): Promise<UploadResult> {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(File not found: ${absolutePath});
  }

  const fileBuffer = fs.readFileSync(absolutePath);
  const stats = fs.statSync(absolutePath);
  const ext = path.extname(filePath).toLowerCase();

  const contentTypeMap: Record<string, string> = {
    ".mp4": "video/mp4",
    ".mov": "video/quicktime",
    ".avi": "video/x-msvideo",
    ".mkv": "video/x-matroska",
  };

  const contentType = contentTypeMap[ext] || "application/octet-stream";

  console.log(Uploading ${path.basename(filePath)} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...);

  const blob = await client.store(fileBuffer, {
    contentType,
    epochs: 10,
  });

  return {
    blobId: blob.id,
    size: stats.size,
    contentType,
    uploadedAt: Date.now(),
  };
}

export async function uploadFromUrl(videoUrl: string): Promise<UploadResult> {
  console.log(Fetching video from URL: ${videoUrl});
  const response = await fetch(videoUrl);

  if (!response.ok) {
    throw new Error(Failed to fetch video: ${response.statusText});
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get("content-type") || "video/mp4";

  const blob = await client.store(buffer, {
    contentType,
    epochs: 10,
  });

  return {
    blobId: blob.id,
    size: buffer.length,
    contentType,
    uploadedAt: Date.now(),
  };
}
