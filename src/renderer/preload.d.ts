// eslint-disable-next-line import/named
// import { ElectronHandler, StoreHandler } from '../main/preload';
import { ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    // storeExample: StoreHandler;
    // // electron: {
    // //   store: {
    // //     get: (key: string) => any;
    // //     set: (key: string, val: any) => void;
    // //   };
    // // };
  }
}

// ...

// declare global {
//   interface Window {
//     electron: {
//       store: {
//         get: (key: string) => any;
//         set: (key: string, val: any) => void;
//         // any other methods you've defined...
//       };
//     };
//   }
// }
export {};
