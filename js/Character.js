import Daemon from './Daemon'
import Bowman  from './Bowman'
import Magician from './Magician'
import Swordsman from './Swordsman'
import Undead from './Undead'
import Zombie from './Zombie'

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
          if(newType === 'Bowman') {
              this._type = newType
              this.attack = 25
              this.defence = 25
          } else if(newType === 'Swordsman'){
            this._type = newType
            this.attack = 40
            this.defence = 10
          } else if (newType === 'Magician') {
            this._type = newType
            this.attack = 10
            this.defence = 40
          } else if (newType === 'Undead') {
            this._type = newType
            this.attack = 25
            this.defence = 25
          } else if (newType === 'Zombie') {
            this._type = newType
            this.attack = 40
            this.defence = 10
          } else if (newType === ' Daemon') {
            this._type = newType
            this.attack = 10
            this.defence = 40
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
  const sasa = new Character('sasas', 'Daemon')