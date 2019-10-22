// villain.ts
export class Villain {
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

  rampage() {
    if (this.health <= 10) {
      this.health = this.maxHealth * 0.90
      console.log(`${this.name} restored health to ${this.health}`);
    } else {
      console.log(`${this.name} is not weak enough`);
    }
  }

  attacked(attackValue) {
    if (attackValue > this.health) {
      console.log(`${this.name} is no more.`);
    } else {
      this.health -= attackValue;
      console.log(`Villain attacked: ${attackValue} -- ${this.health}`);
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