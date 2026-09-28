// =====================================================
// WORLD CULTURE EXPLORER
// culture.js
// =====================================================


// Global culture data
let cultureData = {};


// =====================================================
// GET COUNTRY NAME FROM URL
// =====================================================

function getCountryName() {

    const params = new URLSearchParams(
        window.location.search
    );

    return (
        params.get("country") ||
        params.get("name") ||
        "India"
    );
}


// =====================================================
// LOAD CULTURE JSON
// =====================================================

async function loadCultureData() {

    try {

        const response = await fetch(
            "./data/culture.json"
        );

        if (!response.ok) {

            throw new Error(
                "Culture data could not be loaded"
            );

        }

        cultureData = await response.json();

        console.log(
            "Culture data loaded successfully"
        );

        console.log(
            "Selected country:",
            getCountryName()
        );


        // Display culture data if required
        displayCultureData();


        // Setup category buttons
        setupCultureButtons();


    } catch (error) {

        console.error(
            "Error loading culture data:",
            error
        );

    }

}


// =====================================================
// DISPLAY CULTURE DATA
// =====================================================

function displayCultureData() {

    const country = getCountryName();

    const data = cultureData[country];


    if (!data) {

        console.log(
            "Culture data not available for:",
            country
        );

        return;

    }


    console.log(
        "Culture information found for:",
        country
    );


    // ---------------------------------------------
    // FOOD
    // ---------------------------------------------

    const foodContainer =
        document.getElementById("food-list");


    if (
        foodContainer &&
        data.food
    ) {

        foodContainer.innerHTML = "";


        data.food.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            foodContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // CLOTHING
    // ---------------------------------------------

    const clothingContainer =
        document.getElementById("clothing-list");


    if (
        clothingContainer &&
        data.clothing
    ) {

        clothingContainer.innerHTML = "";


        data.clothing.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            clothingContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // FESTIVALS
    // ---------------------------------------------

    const festivalsContainer =
        document.getElementById("festivals-list");


    if (
        festivalsContainer &&
        data.festivals
    ) {

        festivalsContainer.innerHTML = "";


        data.festivals.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            festivalsContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // DANCE
    // ---------------------------------------------

    const danceContainer =
        document.getElementById("dance-list");


    if (
        danceContainer &&
        data.dance
    ) {

        danceContainer.innerHTML = "";


        data.dance.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            danceContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // CRAFTS
    // ---------------------------------------------

    const craftsContainer =
        document.getElementById("crafts-list");


    if (
        craftsContainer &&
        data.crafts
    ) {

        craftsContainer.innerHTML = "";


        data.crafts.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            craftsContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // SPORTS
    // ---------------------------------------------

    const sportsContainer =
        document.getElementById("sports-list");


    if (
        sportsContainer &&
        data.sports
    ) {

        sportsContainer.innerHTML = "";


        data.sports.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            sportsContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // LIFESTYLE
    // ---------------------------------------------

    const lifestyleContainer =
        document.getElementById(
            "lifestyle-list"
        );


    if (
        lifestyleContainer &&
        data.lifestyle
    ) {

        lifestyleContainer.innerHTML = "";


        data.lifestyle.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            lifestyleContainer.appendChild(li);

        });

    }


    // ---------------------------------------------
    // PLACES
    // ---------------------------------------------

    const placesContainer =
        document.getElementById(
            "places-list"
        );


    if (
        placesContainer &&
        data.places
    ) {

        placesContainer.innerHTML = "";


        data.places.forEach(item => {

            const li =
                document.createElement("li");

            li.textContent = item;

            placesContainer.appendChild(li);

        });

    }

}


// =====================================================
// SETUP CULTURE BUTTONS
// =====================================================

function setupCultureButtons() {


    // Get country from URL
    const country = getCountryName();


    // Encode country name safely
    const encodedCountry =
        encodeURIComponent(country);


    console.log(
        "Creating culture links for:",
        country
    );


    // =================================================
    // FOOD
    // =================================================

    const foodButton =
        document.getElementById(
            "foodButton"
        );


    if (foodButton) {

        foodButton.href =
            `food.html?country=${encodedCountry}`;

    }


    // =================================================
    // CLOTHING
    // =================================================

    const clothingButton =
        document.getElementById(
            "clothingButton"
        );


    if (clothingButton) {

        clothingButton.href =
            `clothing.html?country=${encodedCountry}`;

    }


    // =================================================
    // FESTIVALS
    // =================================================

    const festivalsButton =
        document.getElementById(
            "festivalsButton"
        );


    if (festivalsButton) {

        festivalsButton.href =
            `festivals.html?country=${encodedCountry}`;

    }


    // =================================================
    // PLACES
    // =================================================

    const placesButton =
        document.getElementById(
            "placesButton"
        );


    if (placesButton) {

        placesButton.href =
            `places.html?country=${encodedCountry}`;

    }


    // =================================================
    // MUSIC
    // =================================================

    const musicButton =
        document.getElementById(
            "musicButton"
        );


    if (musicButton) {

        musicButton.href =
            `music.html?country=${encodedCountry}`;

    }


    // =================================================
    // ART
    // =================================================

    const artButton =
        document.getElementById(
            "artButton"
        );


    if (artButton) {

        artButton.href =
            `art.html?country=${encodedCountry}`;

    }


    // =================================================
    // SPORTS
    // =================================================

    const sportsButton =
        document.getElementById(
            "sportsButton"
        );


    if (sportsButton) {

        sportsButton.href =
            `sports.html?country=${encodedCountry}`;

    }


    // =================================================
    // LIFESTYLE
    // =================================================

    const lifestyleButton =
        document.getElementById(
            "lifestyleButton"
        );


    if (lifestyleButton) {

        lifestyleButton.href =
            `lifestyle.html?country=${encodedCountry}`;

    }


    console.log(
        "Culture buttons configured successfully"
    );

}


// =====================================================
// START
// =====================================================

loadCultureData();