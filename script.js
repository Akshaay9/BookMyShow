const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const count=document.getElementById("count")
const total=document.getElementById("total")
const movieSelect =document.getElementById("movie")

let ticketPrice = movieSelect.value

// selecting the movie selected on list again calling count to update
movieSelect.addEventListener("change",(e)=>{
ticketPrice=e.target.value
setMovieData(e.target.selectedIndex, e.target.value);
updateSelectedCount()
})

// ============================================================
// updating price and count
function updateSelectedCount()
{
    const selectedSeats =document.querySelectorAll(".row .seat.selected");

    // ///// Function to store and retrieveseatseven after loading
    const seatsIndex = [...selectedSeats].map(seat=> [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


  
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Selecting Seats and changing colors
container.addEventListener("click", (e)=>{
if(e.target.classList.contains("seat") &&  !e.target.classList.contains("occupied")) 
{
    e.target.classList.toggle("selected")
}
updateSelectedCount()
})
