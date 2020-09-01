import { CriminalHTML } from './Criminals.js'
import { getCriminals, useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if ("crimeThatWasChosen" in event.detail) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const CriminalArray= useCriminals()
        console.log("this is the criminal array", CriminalArray)

        const filteredCriminalArray = CriminalArray.filter(currentConviction => {
          
            return currentConviction.conviction === event.detail.crimeThatWasChosen
        } )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       
        render(filteredCriminalArray)
    }
})


export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const CriminalArray = useCriminals();
        console.log("CriminalArray", CriminalArray);
        render(CriminalArray)
    })
}

const render = (theCriminalArray) => {
        const domElement = document.querySelector(".criminalsContainer");

        let HTMLArray = theCriminalArray.map(singleCriminal => {
            return CriminalHTML(singleCriminal)
        })

        console.log("HTMLArray", HTMLArray)


    domElement.innerHTML = HTMLArray.join("")
    }