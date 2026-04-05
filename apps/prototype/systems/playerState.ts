export type PlayerStats = {

  power:number

  vitality:number

  speed:number

  focus:number

  resilience:number

}

export type Player = {

  faction:string | null

  stats:PlayerStats

  abilities:string[]

  maxHealth:number

  currentHealth:number

}

export const createNewPlayer = ():Player => {

  return {

    faction:null,

    stats:{
      power:1,
      vitality:1,
      speed:1,
      focus:1,
      resilience:1
    },

    abilities:[],

    maxHealth:40,

    currentHealth:40

  }

}

export const setFaction = (player:Player,faction:string):Player => {

  return {

    ...player,

    faction:faction

  }

}

export const setStats = (player:Player,stats:PlayerStats):Player => {

  const health = 30 + (stats.vitality * 2)

  return {

    ...player,

    stats:stats,

    maxHealth:health,

    currentHealth:health

  }

}

export const addAbility = (player:Player,abilityId:string):Player => {

  return {

    ...player,

    abilities:[...player.abilities,abilityId]

  }

}
