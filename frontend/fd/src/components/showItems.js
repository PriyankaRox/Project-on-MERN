import React from 'react'

function ShowItems({data}) {
  return (
    <div>
      <h3>My saved data</h3>
      {data.length && data.map( (v) => {
        return(
          <div key={v.id} style={{backgroundColor: 'aliceblue', margin: 5}}>
            Name: {v.name}
            <br/>
            Age : {v.age}
          </div>
        )
      }) }
    </div>
  )
}

export default ShowItems