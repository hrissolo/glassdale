import { CriminalHTML } from './Criminals.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('what custom event did you dispatch in ConvictionSelect?', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeId" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter()

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

// const render = criminalCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}


// export const CriminalList = () => {
//     getCriminals()
//     .then(() => {
//         const CriminalArray = useCriminals();
//         console.log("CriminalArray", CriminalArray);
//         addCriminalsToDOM(CriminalArray)
//     })
// }

const render = (theCriminalArray) => {
        const domElement = document.querySelector(".criminalsContainer");

        let HTMLArray = theCriminalArray.map(singleCriminal => {
            return CriminalHTML(singleCriminal)
        })

        console.log("HTMLArray", HTMLArray)


    domElement.innerHTML = HTMLArray.join("")
    }