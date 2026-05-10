# shelby-video-drop

A decentralized video upload and streaming app built on Shelby storage protocol.

## Features

- Upload videos directly to Shelby — no centralized servers
- Stream videos from anywhere using a blob ID
- Supports MP4, MOV, AVI, MKV formats
- Chunked uploads for large files
- Aptos wallet authentication
- Permanent storage with erasure coding

## Why Shelby?

Traditional video platforms can delete or restrict your content. With Shelby, your video lives on a decentralized network. Nobody can take it down.

## How it works

1. Connect your Petra wallet
2. Select a video file
3. File is chunked and uploaded to Shelby via the TypeScript SDK
4. A blob ID is returned and stored on Aptos
5. Share the blob ID — anyone can stream your video directly from Shelby

## Project Structure

shelby-video-drop/
├── src/
│   ├── upload.ts      # handles video uploads to Shelby
│   ├── stream.ts      # reads and streams blobs from Shelby
│   └── config.ts      # configuration and constants
├── index.ts           
├── package.json
└── tsconfig.json

## Roadmap

- [x] Core upload logic
- [x] Blob streaming
- [x] Config and environment setup
- [ ] Frontend upload UI
- [ ] Drag and drop support
- [ ] Video preview player
- [ ] Wallet connect integration
- [ ] Mainnet support

## Setup

npm install
npm run dev

Set your environment variables in .env:

SHELBY_RPC=https://rpc.shelby.xyz
SHELBY_NETWORK=testnet

## Status

Work in progress — testnet only.
