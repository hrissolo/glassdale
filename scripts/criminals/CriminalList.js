import { CriminalHTML } from './Criminals.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'

export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const CriminalArray = useCriminals();
        console.log("CriminalArray", CriminalArray);
        addCriminalsToDOM(CriminalArray)
    })
}

const addCriminalsToDOM = (theCriminalArray) => {
        const domElement = document.querySelector(".criminalsContainer");

        let HTMLArray = theCriminalArray.map(singleCriminal => {
            return CriminalHTML(singleCriminal)
        })

        console.log("HTMLArray", HTMLArray)


    domElement.innerHTML = HTMLArray.join("")
    }