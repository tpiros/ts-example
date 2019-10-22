// hero.ts
export class Hero {
  private name: string;
  private health: number;
  private maxHealth: number = 100;
  constructor(name: string, health: number = 100) {
    this.name = name;
    if (health < this.maxHealth) {
      this.health = health;
    } else {
      this.health = this.maxHealth;
    }
  }
  
  attacked(attackValue) {
    if (attackValue > this.health) {
      console.log(`${this.name} is no more.`);
    } else {
      this.health -= attackValue;
      console.log(`Hero attacked: ${attackValue} -- ${this.health}`);
    }
  }

  heal(healValue) {
    if (this.health + healValue > this.maxHealth) {
      console.log(`${this.name} has max health of ${this.maxHealth}`);
    } else {
      this.health += healValue;
      console.log(`${this.name} healed to ${this.health}`);
    }
  }
}