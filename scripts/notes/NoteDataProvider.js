// hold onto array of notes. 
// usedNotes - makes copy of array of notes & returns
// get all the notes from DM 
// add a note to the DB 



const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}


export const saveNote = noteObj => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(noteObj)
    })
    .then((result) => {
        console.log("celebrate right now")
    })
}