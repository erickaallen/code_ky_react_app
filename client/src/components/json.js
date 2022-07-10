import React from "react"
import jsonData from '../data.json'
 
export const JSON = () => {
  const { data: jsonDataFile } = jsonData
 
  return (
   <div>
      <h3>Reading From JSON Data File</h3>
      <p>See changes here by updating the src/data.json file and saving.</p>
      <p>Note this simple example works with key/value pairs, but will break with an object as value.</p>
      <ul>
        {Object.keys(jsonDataFile)?.map((key, index) => (
          <li key={`${key}-${index}`}>
            {key}: {jsonDataFile[key]}
          </li>
        ))}
      </ul>
   </div>
 )
}
