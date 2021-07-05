import React from "react"
import "./BrewMonsters.css"
import { Link } from "react-router-dom"

export default ({ BrewMonster }) => (
  <section className="brewMonsters">
    <h3 className="brew_monster">
      <Link className="brewMonsters_link" to={`/brewery/monsterList/${BrewMonster.id}`}>
        {BrewMonster.name}
      </Link>
    </h3>


  </section>
)