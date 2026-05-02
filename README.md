# shelby-video-drop

A decentralized video upload and streaming app built on Shelby storage protocol.

## Overview

shelby-video-drop lets users upload videos directly to the Shelby network and share a permanent, decentralized link. No centralized servers, no takedowns.

## How it works

1. User selects a video file
2. File is chunked and uploaded to Shelby via the TypeScript SDK
3. A blob ID is returned and stored on Aptos
4. Anyone with the blob ID can stream the video directly from Shelby

## Stack

- Shelby TypeScript SDK
- Aptos TypeScript SDK
- Next.js frontend
- Petra wallet integration

## Project Structure

shelby-video-drop/
├── src/
│   ├── upload.ts      
│   ├── stream.ts      
│   └── config.ts      
├── index.ts           
└── package.json

## Status

Work in progress — testnet only.

## Setup

npm install
npm run dev

Set your environment variables in .env:

SHELBY_RPC=https://rpc.shelby.xyz
SHELBY_NETWORK=testnet
