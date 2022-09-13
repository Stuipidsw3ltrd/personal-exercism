class DnDCharacter {
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    static generateAbilityScore() {
        const rollDiceResults = [];
        for (let i = 0; i < 4; i++) {
            rollDiceResults.push(Math.floor(Math.random() * 6) + 1);
        }
        let topThreeDices = rollDiceResults.sort((a, b) => b - a).slice(0, 3);
        return topThreeDices.reduce((total, current) => {
            return total + current;
        });
    }
    static getModifierFor(abilityValue) {
        return Math.floor((abilityValue - 10) / 2);
    }
}
let x = Array(3);
let y = [...x];
console.log(y);
