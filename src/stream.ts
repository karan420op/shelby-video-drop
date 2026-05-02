import { ShelbyClient } from "@shelby-xyz/sdk";

const client = new ShelbyClient({
  rpcUrl: process.env.SHELBY_RPC || "https://rpc.shelby.xyz",
  network: "testnet",
});

export interface StreamOptions {
  startByte?: number;
  endByte?: number;
  chunkSize?: number;
}

export async function streamBlob(
  blobId: string,
  options: StreamOptions = {}
): Promise<ReadableStream> {
  const { chunkSize = 1024 * 512 } = options;

  console.log(Initiating stream for blob: ${blobId});

  const data = await client.read(blobId);

  return new ReadableStream({
    start(controller) {
      let offset = options.startByte || 0;
      const end = options.endByte || data.length;

      function push() {
        if (offset >= end) {
          controller.close();
          return;
        }

        const chunk = data.slice(offset, offset + chunkSize);
        controller.enqueue(chunk);
        offset += chunkSize;
        push();
      }

      push();
    },
  });
}

export async function getBlobMetadata(blobId: string): Promise<{
  size: number;
  available: boolean;
}> {
  try {
    const data = await client.read(blobId);
    return {
      size: data.length,
      available: true,
    };
  } catch {
    return {
      size: 0,
      available: false,
    };
  }
}
