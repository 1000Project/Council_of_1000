import factions from "../data/factions.json"

type Faction = {

  id:string

  name:string

  motto:string

  description:string

  theme:string

}

type Props = {

  onConfirm:(factionId:string)=>void

}

export default function FactionSelection({ onConfirm }:Props){

  return (

    <div>

      <h2>Choose Your Faction</h2>

      <p>Your allegiance cannot be changed.</p>

      <div>

        {(factions as Faction[]).map((faction)=>{

          return (

            <div key={faction.id}>

              <h3>{faction.name}</h3>

              <p><i>{faction.motto}</i></p>

              <p>{faction.description}</p>

              <button onClick={()=>onConfirm(faction.id)}>

                Choose {faction.name}

              </button>

            </div>

          )

        })}

      </div>

    </div>

  )

}
