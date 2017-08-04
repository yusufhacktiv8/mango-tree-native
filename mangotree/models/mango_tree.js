"use strict"

// release 0

const random = (max, min) => Math.floor(Math.random() * (max - (min + 1))) + min;
// Release 2

class Fruit {
  constructor(quality) {
    this._quality = quality;
  }

  get quality() {
    return this._quality;
  }
}

class FruitTree {
  constructor(age, height, maxFruit) {
    this._age = age;
    this._height = height;
    this._maxFruit = maxFruit;
    this._fruits = [];
    this._harvestedFruitCount = 0;
    this._harvestedGoodFruitCount = 0;
    this._harvestedBadFruitCount = 0;
    this._healthyStatus = true;
  }

  getAge() {
    return this._age;
  }

  getHeight() {
    return this._height;
  }

  getFruits() {
    return this._fruits;
  }

  getHealtyStatus() {
    return this._healthyStatus;
  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this._age < this.MAX_AGE) this._age += 1;
    if (this._age <= this.MAX_GROW_AGE) {
      this._height += (random(10, 1));
    }

    if (this._age >= this.MAX_AGE) {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceFruits() {
    const fruitsCount = random(this._maxFruit, 1);
    for (let i = 0; i < fruitsCount; i += 1) {
      const quality = random(10, 1) > 5;
      const fruit = new Fruit(quality);
      this._fruits.push(fruit);
    }
  }

  // Get some fruits
  harvest() {
    this._harvestedFruitCount = this._fruits.length;
    this._harvestedGoodFruitCount = this._fruits.filter(item => item.quality).length;
    this._harvestedBadFruitCount = this._fruits.filter(item => !item.quality).length;

    this._fruits = [];
  }
}

class Mango extends Fruit {

}

class MangoTree extends FruitTree {
  constructor(age, height, maxFruit) {
    super(age, height, maxFruit);
    this.MAX_GROW_AGE = 10;
    this.MAX_AGE = 20;
  }

}
console.log('');
console.log('------------ Mango Tree --------------');
  //  driver code untuk release 0
const mangoTree = new MangoTree(0, 200, 20);
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvestedFruitCount} (${mangoTree._harvestedGoodFruitCount} good, ${mangoTree._harvestedBadFruitCount} bad) `);
} while (mangoTree.getHealtyStatus() !== false)


class Apple extends Fruit {

}

class AppleTree extends FruitTree {
  constructor(age, height, maxFruit) {
    super(age, height, maxFruit);
    this.MAX_GROW_AGE = 5;
    this.MAX_AGE = 12;
  }
}
console.log('');
console.log('------------ Apple Tree --------------');
  //  driver code untuk release 1
const appleTree = new AppleTree(0, 200, 20);
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvestedFruitCount} (${appleTree._harvestedGoodFruitCount} good, ${appleTree._harvestedBadFruitCount} bad) `);
} while (appleTree.getHealtyStatus() !== false)

class Pear extends Fruit {

}

class PearTree extends FruitTree {
  constructor(age, height, maxFruit) {
    super(age, height, maxFruit);
    this.MAX_GROW_AGE = 3;
    this.MAX_AGE = 8;
  }
}

// Release 3
class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(treeType, age, height, maxFruit, status) {
    let tree = null;
    switch (treeType) {
      case 'MangoTree':
        tree = new MangoTree(age, height, maxFruit);
        break;
      case 'AppleTree':
        tree = new AppleTree(age, height, maxFruit);
        break;
      case 'PearTree':
        tree = new PearTree(age, height, maxFruit);
        break;
      default:
        break;
    }
    this._trees.push(tree);
  }

  nextYear() {
    for (let i = 0; i < this._trees.length; i += 1) {
      const tree = this._trees[i];
      tree.grow();
    }
  }

  showAge() {
    for (let i = 0; i < this._trees.length; i += 1) {
      const tree = this._trees[i];
      console.log(`${tree.constructor.name} age : ${tree.getAge()}`);
    }
  }

  showTrees() {
    for (let i = 0; i < this._trees.length; i += 1) {
      const tree = this._trees[i];
      console.log(`${tree.constructor.name} [Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvestedFruitCount} (${tree._harvestedGoodFruitCount} good, ${tree._harvestedBadFruitCount} bad) `);
    }
  }

  showMatureTrees() {
    const matureTrees = this._trees.filter(tree => (tree.getAge() > 5) && (tree.getHealtyStatus()));
    for (let i = 0; i < matureTrees.length; i += 1) {
      const tree = matureTrees[i];
      console.log(`${tree.constructor.name} [Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvestedFruitCount} (${tree._harvestedGoodFruitCount} good, ${tree._harvestedBadFruitCount} bad) `);
    }
  }

  showDeadTrees() {
    const deadTrees = this._trees.filter(tree => !tree.getHealtyStatus());
    for (let i = 0; i < deadTrees.length; i += 1) {
      const tree = deadTrees[i];
      console.log(`${tree.constructor.name} [Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvestedFruitCount} (${tree._harvestedGoodFruitCount} good, ${tree._harvestedBadFruitCount} bad) `);
    }
  }

  harvestTrees() {
    for (let i = 0; i < this._trees.length; i += 1) {
      const tree = this._trees[i];
      tree.produceFruits();
      tree.harvest();
    }
  }
}

// Driver code release 3
console.log('');
console.log('------------ Tree Grove --------------');

const groove = new TreeGrove();
groove.inputTree('MangoTree', 3, 1.8, 7, true);
groove.inputTree('MangoTree', 5, 2.4, 12, true);
groove.inputTree('AppleTree', 4, 1.2, 5, true);
groove.inputTree('PearTree', 7, 2, 15, true);

groove.nextYear();
groove.showAge();
console.log('');
console.log('>>>> Trees >>>>');
groove.showTrees();
console.log('');
console.log('>>>> Mature Trees >>>>');
groove.showMatureTrees();
console.log('');
console.log('>>>> Dead Trees >>>>');
groove.showDeadTrees();
groove.nextYear();
groove.harvestTrees();
console.log('---------------------------------------------------');
groove.showTrees();
