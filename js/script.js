document.getElementById('seats').addEventListener('click', function(e){

    // Get the passenger selected seat
    const passengerSelected = e.target;



    // Get the number of the selected seat
    const seatName = passengerSelected.innerText;


    // Add and remove background color of the selected seats
    passengerSelected.classList.toggle('selected');
    passengerSelected.classList.toggle('bg-gray-100');    
    

    // Create a DIV to show the information of the selected seats
    const selectedSeats = document.getElementById('selected-seats');
    
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-between', 'items-center');

    const selectedSeatName = document.createElement('p');
    selectedSeatName.classList.add('my-3');
    selectedSeatName.innerText = seatName;
    div.setAttribute('id', seatName);

    const seatClass = document.createElement('p');
    seatClass.classList.add('my-3');
    seatClass.innerText = 'Economy';

    const perSeat = 550;
    const ticketPrice = document.createElement('p');
    ticketPrice.classList.add('my-3');
    ticketPrice.innerText = perSeat;

    div.append(selectedSeatName, seatClass, ticketPrice);    
    selectedSeats.appendChild(div);


    // Update the amount of selected seats amount
    const updateTheAmount = perSeat * selectedSeats.childElementCount;
    setValueById('selected-seats-amount', updateTheAmount);

    // Update the grand total amount of selected seat

    setValueById('grand-total', updateTheAmount);

    // Update the number of selected seats
    const updateCountSeat = 1 * selectedSeats.childElementCount;
    setValueById('count-seat', updateCountSeat);

    // Update the number to total available seats
    const topTotalSeats = 40;
	const totalSelectedSeats = document.getElementById('selected-seats');
	const totalSelectedSeatsCount = totalSelectedSeats.childElementCount;
    const updateTopTotalSeats = topTotalSeats - totalSelectedSeatsCount;

    setValueById('total-seats', updateTopTotalSeats);
});


document.getElementById('seats').addEventListener('click', function(e){
    const targeted = e.target;
    const seatName = targeted.innerText;
    
    targeted.addEventListener('click', function (){
        const removeEle = document.getElementById('selected-seats');
        // console.log(removeEle);
        const removeRight = document.getElementById(seatName);
        removeEle.removeChild(removeRight);
    })
});



document.getElementById('coupon-field').addEventListener('keyup', function(e){
	const applyBtn = document.getElementById('apply-btn');
	const couponText = e.target.value;


		if(couponText === 'NEW15'){
			applyBtn.removeAttribute('disabled');
        } else if (couponText === 'COUPLE20'){
            applyBtn.removeAttribute('disabled');
        }else {
            applyBtn.setAttribute('disabled', true);
        }
})

function addCoupon (){
    const coupon = document.getElementById('coupon-field');
    const couponText  = coupon.value;
    if(couponText === 'NEW15'){
        const totalPrice = getTextElementById('selected-seats-amount');
        const calculatePrice = totalPrice * 15 / 100;
        const grandTotal = totalPrice -calculatePrice;
        setValueById('grand-total', grandTotal);
    } else if(couponText === 'COUPLE20'){
        const totalPrice = getTextElementById('selected-seats-amount');
        const calculatePrice = totalPrice * 20 / 100;
        const grandTotal = totalPrice -calculatePrice;
        setValueById('grand-total', grandTotal);
    }else
    {
        false;
    }
}




