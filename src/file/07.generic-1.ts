class BeeKeeperG {
  hasMask: boolean;
}
class ZooKeeperG {
  nametag: string;
}
class AnimalG {
  numLegs: number;
}
class BeeG extends AnimalG {
  keeper: BeeKeeperG;
}
class LionG extends AnimalG {
  keeper: ZooKeeperG;
}
function createInstance1<A extends AnimalG>(c: new () => A): A {
  return new c();
}

const a = createInstance1(LionG).keeper.nametag;
const b = createInstance1(BeeG).keeper.hasMask;
