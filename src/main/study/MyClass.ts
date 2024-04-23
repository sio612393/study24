/* eslint-disable lines-between-class-members */
// MyClass1.ts
// eslint-disable-next-line max-classes-per-file
export class MyClass1 {
  // クラスの定義
}

export class MyClass2 {
  // クラスの定義
}

export class MyClass3 {
  // クラスの定義
  id: string;
  name: string;
  versions: Array<any>;

  constructor() {
    this.id = '';
    this.name = 'UNKNOWN';
    this.versions = [];
  }
}

export class MyClassObjectMetge {
  prop1: string;

  constructor(prop1: string) {
    this.prop1 = prop1;
  }

  public func() {
    console.log(`TestRun: `);
    let tmp = this.prop1;
    let base = new ClientApp();
    // let base = {};
    console.log(`TestRun:base ` + JSON.stringify(base));
    // console.log(`base:` + (base instanceof ClientApp ? 'ClientApp' : 'NOT ClientApp'));
    console.log(`typeof base = ` + typeof base);
    let create = ClientApp.create({});
    create.location = 'NEW LOCATION';
    console.log(`TestRun:created ` + JSON.stringify(create));
    // console.log(`create:` + (create instanceof ClientApp ? 'ClientApp' : 'NOT ClientApp'));
    // let updated = Object.assign({}, JSON.parse(JSON.stringify(base)), create);
    // let updated = Object.assign({}, base, create);
    let updated = { ...base, ...create };
    console.log(`TestRun:base ` + JSON.stringify(base));
    console.log(`TestRun:updated ` + JSON.stringify(updated));
    // let updated2 = Object.assign(
    //   {},
    //   JSON.parse(JSON.stringify(base)),
    //   JSON.parse(JSON.stringify(create)),
    // );
    // console.log(`TestRun:updated2 ` + JSON.stringify(updated2));

    // type appPartial = Partial<ClientApp>;
    // let new3: appPartial = new appPartial();
    // ;
    // new3.location = '';

    // let orig = {key1: 'val1', key2: 'val2'};
    // let newone = {key2: 'val2-new'};
    // // let merged = Object.assign({}, orig, newone); // OK
    // let merged = {...orig, ...newone}; // OK
    // console.log(`TestRun:orig ` + JSON.stringify(orig));
    // console.log(`TestRun:newone ` + JSON.stringify(newone));
    // console.log(`TestRun:merged ` + JSON.stringify(merged));

    // class Test {
    //   prop1: string;
    //   prop2: string;
    //   constructor(p1: string, p2: string) {
    //     this.prop1 = p1;
    //     this.prop2 = p2;
    //   }
    // }
    // let sio1 = new Test('val1-1', 'val2-1');
    // let sio2 = new Test('', 'val2-2-NEW');
    // let sioMerged = Object.assign({}, sio1, sio2);
    // console.log(`TestRun:sio1 ` + JSON.stringify(sio1));
    // console.log(`TestRun:sio2 ` + JSON.stringify(sio2));
    // console.log(`TestRun:sioMerged ` + JSON.stringify(sioMerged));
  }
}
