/*
Take notes made and prepare to display on website
*/

const eventHub = document.querySelector("#main")


export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note--title">Criminal: ${ noteObject.suspectObj.name }</div>
            <div class="note--content">${ noteObject.noteText }</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}