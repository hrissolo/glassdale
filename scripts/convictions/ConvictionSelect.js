import {useConvictions, getConvictions} from './ConvictionProvider.js';

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then(() => {
    const convictions = useConvictions(); 
    console.log(convictions)
    

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        console.log(customEvent)
        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)

    }
})

    const render = (convictionsCollection) => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(convictionObj => {
                        const convict = convictionObj.name
                        return `<option value="${convictionObj.name}">${convict}</option>`
                    })
                }
            </select>
        `    
    }
    render(convictions)
})
}

