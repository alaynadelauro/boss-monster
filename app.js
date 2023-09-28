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
    level: 1,
    deathCount: 0
}

let gold = 0

function attackBoss(){
    heroes.forEach(hero => {
        boss.health -= hero.damage
    })
    if(boss.health <= 0)boss.health = 0
    if(boss.health <= 0){
        bossDrops()
        drawGold()
    }
    if(boss.health <= 0)boss.deathCount++
    if(boss.health <= 0) levelUpBoss()
    drawBoss()
}

function drawBoss(){
    let bossHp = document.getElementById('boss')
    bossHp.innerText = boss.health.toString()
    let bossLevel = document.getElementById('bosslevel')
    bossLevel.innerText = boss.level.toString()
    let bossDeaths = document.getElementById('deadBosses')
    bossDeaths.innerText = boss.deathCount.toString()
}


function bossAttack(){
    heroes.forEach(hero => {
        hero.health -= boss.damage
        if(hero.health <= 0){hero.health = 0}
        console.log(hero.health)
        drawHeroStats()
    })
}

function levelUpBoss(){
    boss.maxHealth++
    boss.health = boss.maxHealth
    boss.damage++
    boss.level++
}

function drawGold(){
    let currentGold = document.getElementById('gold')
    currentGold.innerText = gold.toString()
}

function bossDrops(){
    let drops = boss.level * 10
    gold += drops
    console.log(gold)
}

function drawHeroStats(){
    heroes.forEach(hero => {
        const heroElement = document.getElementById(hero.name)

        heroElement.innerHTML = `<p>${hero.name}<p>
        <p>HP ${hero.health}<p>
        <p>Damage ${hero.damage}<p>
        <p>Type ${hero.type}<p>`
    })
}


drawHeroStats()
drawGold()
setInterval(bossAttack, 5000)
drawBoss()
