
export default class Character {
      constructor(name, type) {
          this.name = name
          this.type = type
          this.health = 100
          this.level = 1
          this.attack
          this.defence
      }

      get name() {
          return this._name
      }
      set name(newName) {
          if(typeof(newName)!= 'string' || newName.length < 2 || newName.length > 10) {
              return new error('Erorr naming')
          }
           this._name = newName
      }

      get type() {
          return this._type
      }
      set type(newType) {
        let pers = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
          if(pers.includes(newType))  {
            this._type = newType
          } else {
            return new Error()
          }
        }
      
      levelUp() {
        if(this.health <= 0) {
          return new error('нельзя повысить уровень умершего')
        }
        this.level += 1
        this.attack += this.attack * 0.2
        this.defence += this.defence * 0.2
        this.health = 100

      }

      damage(points) {
        if(this.health >= 0) {
        this.health -=this.health * (1- this.defence/100)
        }
      }
  }
