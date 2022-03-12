
window.addEventListener("load", () => {
    const nameInput = document.getElementById("name");
    const couponCodeInput = document.getElementById("coupon-code");
    const button = document.getElementById("button");
    const nowinElem = document.getElementById("no-win");
    const winElem = document.getElementById("you-won");

    button.addEventListener("click", async e => {
        e.preventDefault();

        winElem.style.display = "none";   //new click of button:
        nowinElem.style.display = "none"; // hide previous messages

        let resp = await fetch('checkCouponCode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: nameInput.value,
                couponCode: couponCodeInput.value
            })
        })

        if (resp.status !== 200) console.log('Winner check failed');

        let json = await resp.json();
        if (json.isWinner) {
            winElem.style.display = "block";
        } else {
            setTimeout(() => nowinElem.style.display = "block", 200);
        }
    })
})