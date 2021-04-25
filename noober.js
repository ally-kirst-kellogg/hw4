window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  //console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  let rides =json

  //console.log(rides)

  // Loop through the rides data

    // Create a variable to store each ride in memory
      //code that repeats 
    for(let i=0; i < rides.length; i++) {
      let rideDetails = rides[i]

       // Create a variable for the HTML element we're going to add to
      let ridesHtml = document.querySelector(`.rides`) 

         // Create arideServiceType variable 
        let rideServiceType
        if (rideDetails.purpleRequested  == true) 
          {
            rideServiceType = `Noober Purple`
          } else if (rideDetails.numberOfPassengers  > 3) 
       {
         rideServiceType = `Noober XL`
       } else  {
         rideServiceType = `Noober X`
          }
       

   

      // Insert HTML into the ridesHtml element, using the data from each ride
     
        ridesHtml.insertAdjacentHTML(`beforeend`,  `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${rideServiceType}</span>
      </h1>
  
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${rideDetails.passengerDetails.first} ${rideDetails.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${rideDetails.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
             ${rideDetails.numberOfPassengers}
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${rideDetails.pickupLocation.address}</p>
            <p>${rideDetails.pickupLocation.city}, ${rideDetails.pickupLocation.state} ${rideDetails.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${rideDetails.dropoffLocation.address}</p>
            <p>${rideDetails.dropoffLocation.city}, ${rideDetails.dropoffLocation.state} ${rideDetails.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
      
        `)
      console.log(ridesHtml)
      }
  
  
    // Create a variable for the HTML element we're going to add to
   

    // Insert HTML into the products element, using the data from each product


})