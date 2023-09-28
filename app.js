const heroes = [
    {
        name: 'Slate',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

function attackBoss(){
    heroes.forEach(hero => {
        boss.health -= hero.damage
    })
    console.log(boss.health)
    let bossHp = document.getElementById('boss')
    bossHp.innerText = boss.health.toString()
    bossAttack()
}

function bossAttack(){
    heroes.forEach(hero => {
        hero.health -= boss.damage
    })
    let heroHp = document.getElementById('hp')
    heroHp.innerText = heroes.health
    
}

function drawHp(){
    let heroHp = heroes.forEach(hero => {
        
    })

}

