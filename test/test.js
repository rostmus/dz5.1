import Daemon from '..//js/Daemon'
import Bowman from '..//js/Bowman'
import Magician from '..//js/Magician'
import Swordsman from '..//js/Swordsman'
import Undead from '..//js/Undead'
import Zombie from '..//js/Zombie'
import Character from '..//js/Character'




test('Testing Naming', () => {
const pers = new Bowman('1', 'Bowman')
    expect(pers()).toBe('Erorr naming')
}
)