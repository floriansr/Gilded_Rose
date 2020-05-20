import Shop from "./shop.mjs";

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

/////////////////////////////////////////

class BasicProduct extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  newDetails = () => {
    console.log(this.name);
    console.log(this.sellIn);
    console.log(this.quality);
  };
}

class LegendaryObject extends Item {
  constructor(name, quality) {
    super(name, quality);
    this.quality = quality;
  }

  newDetails = () => {
    console.log(this.name);
    console.log(this.quality);
  };
}

class BetterQualityWithTime extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  newDetails = () => {
    console.log(this.name);
    console.log(this.sellIn);
    console.log(this.quality);
  };
}

class Tickets extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  newDetails = () => {
    console.log(this.name);
    console.log(this.sellIn);
    console.log(this.quality);
  };
}

/////////////////////////////////////////

const updateQuality = (items) => {
  items.forEach((item) => {
    item.newDetails();
  });
};

const items = [
  new BasicProduct("Carotte", 50, 35),
  new LegendaryObject("Sulfura", 80),
  new BetterQualityWithTime("Brie", 50, 25),
  new Tickets("Backstage pour soirée DISCODISCO", 50, 5),
];

updateQuality(items);

export default {
  Item,
  Shop,
};
