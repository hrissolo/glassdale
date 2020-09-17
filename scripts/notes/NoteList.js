/*
map over an array and display all notes from Note.js
*/

import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector("#noteListContainer")
const eventHub = document.querySelector("#main")

const render = (notes) => {
    const criminals = useCriminals()
    contentTarget.innerHTML = notes.map((noteObject) => {
            return NoteHTMLConverter(noteObject)
        }).join("");
}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}


eventHub.addEventListener("noteStateChanged", () => {	
    const newNotes = useNotes()
    render(newNotes)
})
