class DnDCharacter {
  public strength: number;
  public constitution: number;
  public intelligence: number;
  public dexterity: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints:number;
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    const rollDiceResults: number[] = [];
    for (let i = 0; i < 4; i++) {
      rollDiceResults.push(Math.floor(Math.random() * 6) + 1);
    }
    let topThreeDices = rollDiceResults.sort((a, b) => b - a).slice(0, 3);
    return topThreeDices.reduce((total, current) => {
      return total + current;
    });
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

let x = Array(3)
let y = [...x]
console.log(y)
