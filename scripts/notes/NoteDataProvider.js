// hold onto array of notes. 
// usedNotes - makes copy of array of notes & returns
// get all the notes from DM 
// add a note to the DB 



const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

//saves note and posts to the API. passing noteObj to JSON file
export const saveNote = noteObj => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(noteObj)
    })
    //updates our notes array... 
    .then(getNotes)
    //lets our eventHub listen to the new custom event 
    .then(dispatchStateChangeEvent)
}


export const useNotes = () => {
    return notes.slice()
}