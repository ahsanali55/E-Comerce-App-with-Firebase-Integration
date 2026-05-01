/// <reference types="vite/client" />

declare global {
  type RootState = import("./store/store").RootState;
}

export {};

