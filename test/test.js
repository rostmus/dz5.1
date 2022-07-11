import Daemon from '..//js/Daemon'
import Bowman from '..//js/Bowman'
import Magician from '..//js/Magician'
import Swordsman from '..//js/Swordsman'
import Undead from '..//js/Undead'
import Zombie from '..//js/Zombie'
import Character from '..//js/Character'




test('Testing Bowman', () => {
    const bowman = new Bowman('Baiden', 'Bowman')
    const expected = {
        name: 'Baiden',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    expect(bowman).toEqual(expected)
}
)
