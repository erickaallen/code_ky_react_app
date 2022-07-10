import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"
 
export const Edit = () => {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   records: [],
 })
 const params = useParams()
 const navigate = useNavigate()
 
 useEffect(() => {
   const fetchData = async () => {
     const id = params.id.toString()
     const response = await fetch(`http://localhost:4000/record/${params.id.toString()}`)
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`
       window.alert(message)
       return
     }
 
     const record = await response.json()
     if (!record) {
       window.alert(`Record with id ${id} not found`)
       navigate("/record")
       return
     }
 
     setForm(record)
   }
 
   fetchData()
 
   return
 }, [params.id, navigate])
 
 // These methods will update the state properties.
 const updateForm = (value) => {
   return setForm((prev) => {
     return { ...prev, ...value }
   })
 }
 
 const onSubmit = async (e) => {
   e.preventDefault()
   const editedPerson = {
     name: form.name,
     position: form.position,
     level: form.level,
   }
 
   await fetch(`http://localhost:4000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   })
 
   navigate("/record")
 }
 
 return (
  <div>
    <h3>Update Record</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position: </label>
        <input
          type="text"
          className="form-control"
          id="position"
          value={form.position}
          onChange={(e) => updateForm({ position: e.target.value })}
        />
      </div>
      <div className="form-group">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="positionOptions"
            id="positionIntern"
            value="Intern"
            checked={form.level === "Intern"}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
          <label htmlFor="positionIntern" className="form-check-label">Intern</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="positionOptions"
            id="positionJunior"
            value="Junior"
            checked={form.level === "Junior"}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
          <label htmlFor="positionJunior" className="form-check-label">Junior</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="positionOptions"
            id="positionSenior"
            value="Senior"
            checked={form.level === "Senior"}
            onChange={(e) => updateForm({ level: e.target.value })}
          />
          <label htmlFor="positionSenior" className="form-check-label">Senior</label>
      </div>
      </div>
      <br />

      <div className="form-group">
        <input
          type="submit"
          value="Update Record"
          className="btn btn-primary"
        />
      </div>
    </form>
  </div>
 )
}
