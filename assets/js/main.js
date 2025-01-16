document.addEventListener("DOMContentLoaded", () => {
    loadBooking()
    chooseType()
    scrollToTop()
})

function loadBooking() {
    const alerts = document.getElementById('alerts')

    if (!alerts) {
        return;
    }

    const urlParams = new URLSearchParams(window.location.search),
        roomType = urlParams.get('roomType'),
        username = urlParams.get('username'),
        email = urlParams.get('email'),
        tel = urlParams.get('tel'),
        address = urlParams.get('address'),
        arrivalDate = urlParams.get('arrivalDate'),
        departureDate = urlParams.get('departureDate'),
        adult = urlParams.get('adult'),
        children = urlParams.get('children')

    const peopleCount = parseInt(adult) + parseInt(children)

    if (!username || !arrivalDate || !roomType || !departureDate) {
        return;
    }

    alerts.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  You have successfully booked a room for ${peopleCount} people from ${arrivalDate} to ${departureDate} in ${roomType}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}

function chooseType() {
    const input = document.getElementById('roomTypeInput')

    if (!input) {
        return;
    }

    const roomTypes = document.querySelectorAll('[data-room-type]');

    for (let i = 0; i < roomTypes.length; i++) {
        roomTypes[i].addEventListener('click', function() {
            input.value = this.dataset.roomType;
        });
    }
}

function scrollToTop() {
    const btn = document.getElementById('scroll-top')

    if (!btn) {
        return
    }

    btn.addEventListener('click', function() {
        window.scrollTo(0, 0);
    })

    document.addEventListener("scroll", (event) => {
        if (window.scrollY < 800) {
            btn.classList.remove('active')
            return;
        }

        const classes = btn.classList

        if (classes.contains('active')) {
            return
        }

        btn.classList.add('active')
    })
}

