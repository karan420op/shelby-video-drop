export interface ShelbyConfig {
  rpcUrl: string;
  network: "testnet" | "mainnet";
  maxUploadSizeMb: number;
  defaultEpochs: number;
}

export const defaultConfig: ShelbyConfig = {
  rpcUrl: process.env.SHELBY_RPC || "https://rpc.shelby.xyz",
  network: (process.env.SHELBY_NETWORK as "testnet" | "mainnet") || "testnet",
  maxUploadSizeMb: 500,
  defaultEpochs: 10,
};

export const SUPPORTED_VIDEO_FORMATS = [
  "video/mp4",
  "video/quicktime",
  "video/x-msvideo",
  "video/x-matroska",
];

export const MAX_CHUNK_SIZE = 1024 * 512; // 512KB chunks
export const SHELBY_RPC_TESTNET = "https://rpc.shelby.xyz";
