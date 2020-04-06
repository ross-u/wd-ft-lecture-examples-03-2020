// Soldier
class Soldier {
  constructor(healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
  }

  // Create methods on the Solider.prototype that will be shared with all object instances
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(nameArg, healthArg, strengthArg) {
    super(healthArg, strengthArg);
    this.name = nameArg;
  }
  // Create methods on the Viking.prototype that will be shared with all Viking instances
  receiveDamage(damage) {
    this.health = this.health - damage;
    // or receiveDamage by Calling the method that already exists on the Soldier `.prototype`
    // Soldier.prototype.receiveDamage.call(this, damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(healthArg, strengthArg) {
    super(healthArg, strengthArg);
  }

  // Create methods on the Saxon.prototype that will be shared with all Saxon instances
  receiveDamage(damage) {
    this.health = this.health - damage;
    // or receive damage by Calling the method that already exists on the Soldier `.prototype`
    // Soldier.prototype.receiveDamage.call(this, damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingSoldier = this.vikingArmy[randomViking];
    const saxonSoldier = this.saxonArmy[randomSaxon];

    const vikingAttack = vikingSoldier.attack();
    const damageReceived = saxonSoldier.receiveDamage(vikingAttack);

    // Check the health of the saxonSoldier
    if (saxonSoldier.health <= 0) {
      this.saxonArmy.splice(randomSaxon, 1);
    }

    return damageReceived;
  }

  saxonAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingSoldier = this.vikingArmy[this.vikingArmy.length - 1];
    const saxonSoldier = this.saxonArmy[this.saxonArmy.length - 1];

    const saxonAttack = saxonSoldier.attack();
    const damageReceived = vikingSoldier.receiveDamage(saxonAttack);

    // Check the health of the vikingSoldier
    if (vikingSoldier.health <= 0) {
      this.vikingArmy.splice(randomViking, 1);
    }

    return damageReceived;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
