import { uploadVideoFile, uploadFromUrl } from "./src/upload";
import { streamBlob, getBlobMetadata } from "./src/stream";
import { defaultConfig } from "./src/config";

async function main() {
  console.log("shelby-video-drop starting...");
  console.log(Connected to Shelby RPC: ${defaultConfig.rpcUrl});
  console.log(Network: ${defaultConfig.network});

  // Example: upload a local video file
  // const result = await uploadVideoFile("./sample.mp4");
  // console.log("Uploaded:", result);

  // Example: stream a blob by ID
  // const stream = await streamBlob("your-blob-id-here");
  // console.log("Stream ready");

  // Example: check blob metadata
  // const meta = await getBlobMetadata("your-blob-id-here");
  // console.log("Metadata:", meta);
}

main().catch(console.error);
