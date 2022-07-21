class character  {
    constructor(name,weapon){
   this.name = name; 
    this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon
    }
}


class Elf extends character {
    constructor (name, weapon,type) {
        super(name, weapon)
        this.type = type
    }
  attack(cry){
        return 'attack with ' + cry
  }
}



class ogre extends character {
    constructor (name,weapon,color){
        super(name,weapon)
        this.color = color
    }
    attack(){
        super.attack()
        //return `ROOOARR`
    }
    destroy() {
        return `GBOOOSAAAAA`
    }
}


const peter =  new Elf("peter","stone")
//console.log(peter.attack())

const sam = new Elf("sam","fire")
//console.log(sam.attack())
const fiona = new Elf('fiona', 'love potion');
//fiona
const dolby = new Elf('dolby','axe','streets')
console.log(dolby.attack('yieeen'))

 
const shrek = new ogre('shrek', 'hands','green')
console.log(shrek.attack())
