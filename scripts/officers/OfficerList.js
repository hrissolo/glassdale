import { OfficerHTML } from './Officer.js'
import { getOfficers, useOfficers } from './OfficerProvider.js'

export const OfficerList = () => {
    getOfficers()
    .then(() => {
        const officerArray = useOfficers();
        console.log("officerArray", officerArray);
        addOfficersToDOM(officerArray)
    })
}

const addOfficersToDOM = (theOfficerArray) => {
        const domElement = document.querySelector(".officersContainer");

        let HTMLArray = theOfficerArray.map(singleOfficer => {
            return OfficerHTML(singleOfficer)
        })

        console.log("HTMLArray", HTMLArray)


    domElement.innerHTML = HTMLArray.join("")
    }