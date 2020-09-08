import { NotesHTML } from "./Note.js"
import { useNotes } from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", event => {
    render(useNotes())  
})



//renders the notes to the dom 
const render = (createdNotes) => {
    //getting a ref to where we wanna put the notes
    const domElement = document.querySelector(".notesHere");
    //.map returns an array of the HTML reps of each single note 
    let HTMLArray = createdNotes.map(singleNote => {
        return NotesHTML(singleNote)
    })

    console.log("HTMLArray", HTMLArray)

    //combines all of the HTML reps of each single note and prints onto the dom
domElement.innerHTML = HTMLArray.join("")
}