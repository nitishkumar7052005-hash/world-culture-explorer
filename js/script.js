/* =====================================
   COUNTRY SEARCH
===================================== */

function searchCountry() {

    const input =
        document.getElementById("countrySearch");

    const message =
        document.getElementById("searchMessage");

    const countryName =
        input.value.trim();


    // Empty search

    if (countryName === "") {

        message.textContent =
            "Please enter a country name.";

        return;
    }


    // Show loading message

    message.textContent =
        "🌍 Searching for " + countryName + "...";


    /*
        Send country name to country.html
    */

    window.location.href =
        "country.html?name=" +
        encodeURIComponent(countryName);
}


/* =====================================
   ENTER KEY SEARCH
===================================== */

document
    .getElementById("countrySearch")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            searchCountry();

        }

    });