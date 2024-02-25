// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';
export type ChannelsStore = 'ipc-store';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
  store: {
    get(channel: ChannelsStore, key: string): number {
      return ipcRenderer.sendSync(channel, key);
    },
    set(channel: ChannelsStore, property: string, val: number) {
      ipcRenderer.send(channel, property, val);
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;

// const { contextBridge, ipcRenderer } = require('electron');

// const storeHandler = {
//   store: {
//     get(key: string) {
//       return ipcRenderer.sendSync('electron-store-get', key);
//     },
//     set(property: string, val: any) {
//       ipcRenderer.send('electron-store-set', property, val);
//     },
//     // Other method you want to add like has(), reset(), etc.
//   },
//   // Any other methods you want to expose in the window object.
//   // ...
// };

// contextBridge.exposeInMainWorld('storeExample', storeHandler);
// export type StoreHandler = typeof storeHandler;

// contextBridge.exposeInMainWorld('electron', {
//   store: {
//     get(key) {
//       return ipcRenderer.sendSync('electron-store-get', key);
//     },
//     set(property, val) {
//       ipcRenderer.send('electron-store-set', property, val);
//     },
//     // Other method you want to add like has(), reset(), etc.
//   },
//   // Any other methods you want to expose in the window object.
//   // ...
// });
