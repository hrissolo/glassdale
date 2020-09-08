export const NotesHTML = (noteObj) => {
    return `
        <section class="each-note">
            <p>Date: ${noteObj.date}</p>
            <p>Suspect: ${noteObj.suspect}</p>
            <p>Note: ${noteObj.noteText}</p>
        </section>
    `
}