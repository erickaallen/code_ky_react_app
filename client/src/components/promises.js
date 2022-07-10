import { getMemes } from '../promises'
import React, { useState } from 'react'
import "../App.css"
 
export const Promises = () => {
  const [memes, setMemes] = useState([])
  const [numberOfMemes, setNumberOfMemes] = useState(100)
  const [displayError, setDisplayError] = useState(false)
  
  const updateNumber = (event) => {
    const number = parseInt(event.target.value)
    if (isNaN(number) || event.target.value === null) {
      setNumberOfMemes(0)
    } else if (number > 0 && number <= 100) {
      setDisplayError(false)
      setNumberOfMemes(number)
    } else {
      setDisplayError(true)
      setNumberOfMemes(0)
    }
  }

  const showMemes = () => {
    getMemes().then(data => {
      setMemes(data?.data?.memes) 
    })
  }
 
 return (
  <div>
    <h3>Promises/API Example
      <button onClick={showMemes} style={{ opacity: memes.length > 0 ? .4 : 1 }} disabled={memes?.length > 0 ? true : false} className="memes-button">
          Get 100 Memes
      </button></h3>
    <div>

    </div>
    <div>
      <p>Select Number of Memes to Display</p><input type='numeric' onChange={e => updateNumber(e)}/>
    </div>
    {displayError && <p className="error-message">Number must be between 1 and 100.</p>}
    <div className="memes-container">
      {memes?.slice(0, numberOfMemes).map((meme, index) => 
        <img src={meme.url} key={`${meme.id}-${index}`} alt={meme.name} className="meme-image" />
      )}
    </div>
  </div>
 )
}
