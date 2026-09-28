// ========================================
// Get Country Name from URL
// ========================================

const params = new URLSearchParams(window.location.search);
const searchedCountry = params.get("name");


// ========================================
// HTML Elements
// ========================================

const container = document.getElementById("countryContainer");


// ========================================
// REST COUNTRIES API KEY
// ========================================

// Yahan apni actual REST Countries API key paste karo
const API_KEY = "rc_live_489fbc28c3df4b8293b6a738a74039d6";


// ========================================
// Start
// ========================================

if (!searchedCountry) {

    container.innerHTML = `
        <div style="text-align:center;padding:100px 20px;">
            <h2>❌ No Country Selected</h2>
            <p>Please go back and search for a country.</p>
            <br>
            <a href="index.html">← Back to Home</a>
        </div>
    `;

} else {

    getCountry(searchedCountry);

}


// ========================================
// Get Country
// ========================================

async function getCountry(countryName) {

    try {

        // Loading
        container.innerHTML = `
            <div style="text-align:center;padding:100px 20px;">
                <h2>🌍 Searching...</h2>
                <p>Finding information about ${countryName}</p>
            </div>
        `;


        // ========================================
        // API URL
        // ========================================

        const URL =
            `https://api.restcountries.com/countries/v5/names.common/${encodeURIComponent(countryName)}`;


        // ========================================
        // API Request
        // ========================================

        const response = await fetch(URL, {

            headers: {
                "Authorization": `Bearer ${API_KEY}`
            }

        });


        // Convert response to JSON

        const result = await response.json();


        console.log("API Status:", response.status);
        console.log("API Result:", result);


        // ========================================
        // Check API Response
        // ========================================

        if (!response.ok) {

            const errorMessage =
                result.errors?.[0]?.message ||
                "Country not found";

            throw new Error(errorMessage);

        }


        // ========================================
        // Get Country Object
        // ========================================

        const data = result.data.objects[0];


        if (!data) {

            throw new Error("Country not found");

        }


        console.log("Country Data:", data);


        // ========================================
        // Display Country
        // ========================================

        displayCountry(data);


    } catch (error) {

        console.error("Error:", error);


        container.innerHTML = `
            <div style="text-align:center;padding:100px 20px;">

                <h2>❌ Country Not Found</h2>

                <p>
                    We couldn't find information about
                    "${countryName}".
                </p>

                <p style="color:#777;">
                    ${error.message}
                </p>

                <br>

                <a href="index.html">
                    ← Search Again
                </a>

            </div>
        `;

    }

}


// ========================================
// Display Country
// ========================================

function displayCountry(data) {


    // ========================================
    // Country Name
    // ========================================

    const name =
        data.names?.common || "N/A";


    // ========================================
    // Official Name
    // ========================================

    const officialName =
        data.names?.official || "N/A";


    // ========================================
    // Flag
    // ========================================

    const flagEmoji =
        data.flag?.emoji || "🌍";


    const flagImage =
        data.flag?.url_png ||
        data.flag?.url_svg ||
        "";


    // ========================================
    // Capital
    // ========================================

    const capital =
        data.capitals?.[0]?.name || "N/A";


    // ========================================
    // Population
    // ========================================

    const population =
        data.population
            ? data.population.toLocaleString()
            : "N/A";


    // ========================================
    // Currency
    // ========================================

    const currencyCode =
        Object.keys(data.currencies || {})[0];


    const currencyName =
        data.currencies?.[currencyCode]?.name ||
        "N/A";


    const currencySymbol =
        data.currencies?.[currencyCode]?.symbol ||
        "";


    const currency =
        currencyCode
            ? `${currencyName} (${currencyCode}) ${currencySymbol}`
            : "N/A";


    // ========================================
    // Languages
    // ========================================

    const languages =
        Object.values(data.languages || {})
            .map(lang => lang.name)
            .filter(Boolean)
            .join(", ") || "N/A";


    // ========================================
    // Region
    // ========================================

    const region =
        data.region || "N/A";


    // ========================================
    // Subregion
    // ========================================

    const subregion =
        data.subregion || "N/A";


    // ========================================
    // Timezone
    // ========================================

    const timezone =
        data.timezones?.[0] || "N/A";


    // ========================================
    // All Timezones
    // ========================================

    const allTimezones =
        data.timezones?.join(", ") || "N/A";


    // ========================================
    // Area
    // ========================================

    const area =
        data.area
            ? data.area.toLocaleString() + " km²"
            : "N/A";


    // ========================================
    // Border Countries
    // ========================================

    const borders =
        data.borders?.join(", ") || "None";


    // ========================================
    // Calling Code
    // ========================================

    const callingCode =
        data.calling_codes?.[0] || "N/A";


    // ========================================
    // Coordinates
    // ========================================

    const latitude =
        data.latlng?.[0] ?? "N/A";


    const longitude =
        data.latlng?.[1] ?? "N/A";


    // ========================================
    // Flag HTML
    // ========================================

    let flagHTML = `
        <div class="country-big-flag">
            ${flagEmoji}
        </div>
    `;


    if (flagImage) {

        flagHTML = `
            <img
                src="${flagImage}"
                alt="${name} Flag"
                class="country-flag"
            >
        `;

    }


    // ========================================
    // Display HTML
    // ========================================

    container.innerHTML = `

        <!-- COUNTRY HERO -->

        <section class="country-hero">

            <div class="country-hero-content">

                ${flagHTML}

                <p class="small-title">
                    COUNTRY EXPLORER
                </p>

                <h1>
                    ${name}
                </h1>

                <p>
                    ${officialName}
                </p>

            </div>

        </section>


        <!-- BASIC INFORMATION -->

        <section class="section">

            <div class="section-title">

                <p>
                    COUNTRY INFORMATION
                </p>

                <h2>
                    About ${name}
                </h2>

                <span>
                    Important information about ${name}.
                </span>

            </div>


            <div class="info-grid">


                <!-- Capital -->

                <div class="info-card">

                    <span>🏙️</span>

                    <h3>
                        Capital
                    </h3>

                    <p>
                        ${capital}
                    </p>

                </div>


                <!-- Currency -->

                <div class="info-card">

                    <span>💰</span>

                    <h3>
                        Currency
                    </h3>

                    <p>
                        ${currency}
                    </p>

                </div>


                <!-- Population -->

                <div class="info-card">

                    <span>👥</span>

                    <h3>
                        Population
                    </h3>

                    <p>
                        ${population}
                    </p>

                </div>


                <!-- Languages -->

                <div class="info-card">

                    <span>🗣️</span>

                    <h3>
                        Languages
                    </h3>

                    <p>
                        ${languages}
                    </p>

                </div>


                <!-- Region -->

                <div class="info-card">

                    <span>🌍</span>

                    <h3>
                        Region
                    </h3>

                    <p>
                        ${region}
                    </p>

                </div>


                <!-- Subregion -->

                <div class="info-card">

                    <span>🗺️</span>

                    <h3>
                        Subregion
                    </h3>

                    <p>
                        ${subregion}
                    </p>

                </div>


                <!-- Area -->

                <div class="info-card">

                    <span>📐</span>

                    <h3>
                        Area
                    </h3>

                    <p>
                        ${area}
                    </p>

                </div>


                <!-- Timezone -->

                <div class="info-card">

                    <span>🕐</span>

                    <h3>
                        Timezone
                    </h3>

                    <p>
                        ${timezone}
                    </p>

                </div>


                <!-- Borders -->

                <div class="info-card">

                    <span>🚩</span>

                    <h3>
                        Border Countries
                    </h3>

                    <p>
                        ${borders}
                    </p>

                </div>


                <!-- Calling Code -->

                <div class="info-card">

                    <span>📞</span>

                    <h3>
                        Calling Code
                    </h3>

                    <p>
                        +${callingCode}
                    </p>

                </div>


                <!-- Coordinates -->

                <div class="info-card">

                    <span>📍</span>

                    <h3>
                        Coordinates
                    </h3>

                    <p>
                        ${latitude}, ${longitude}
                    </p>

                </div>


                <!-- All Timezones -->

                <div class="info-card">

                    <span>⏰</span>

                    <h3>
                        All Timezones
                    </h3>

                    <p>
                        ${allTimezones}
                    </p>

                </div>

            </div>

        </section>


        <!-- CULTURE SECTION -->

        <section class="about">

            <div class="about-content">

                <p class="small-title">
                    DISCOVER
                </p>

                <h2>
                    Explore ${name}
                </h2>

                <p>
                    Discover the famous food, traditional
                    clothing, festivals, famous places,
                    languages, music, art, lifestyle,
                    sports and natural beauty of ${name}.
                </p>

            </div>

        </section>


        <!-- BACK BUTTON -->

        <div style="
            text-align:center;
            padding:50px;
        ">

            <a
                href="index.html"
                style="
                    text-decoration:none;
                    background:#6c5ce7;
                    color:white;
                    padding:15px 30px;
                    border-radius:30px;
                    display:inline-block;
                "
            >
                ← Search Another Country
            </a>

        </div>

    `;

}

// ========================================
// SHOW CULTURE
// ========================================

function showCulture(category) {

    const details =
        document.getElementById("cultureDetails");

    const countryName =
        document
            .querySelector(".country-hero-content h1")
            ?.innerText
            .toLowerCase();


    // Check country

    if (!cultureData[countryName]) {

        details.innerHTML = `

            <div class="culture-content">

                <h2>
                    🌍 Culture Data Coming Soon
                </h2>

                <p>
                    Detailed cultural information
                    for ${countryName} will be added.
                </p>

            </div>

        `;

        details.classList.add("active");

        details.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    const data =
        cultureData[countryName][category];


    if (!data) {

        details.innerHTML = `

            <div class="culture-content">

                <h2>
                    Information Coming Soon
                </h2>

            </div>

        `;

        details.classList.add("active");

        return;

    }


    // Category title

    const titles = {

        food: "🍛 Famous Food",

        clothing: "👕 Traditional Clothing",

        festivals: "🎉 Festivals",

        places: "🏛️ Famous Places",

        music: "🎵 Music & Dance",

        art: "🎨 Art & Crafts",

        sports: "🏏 Sports",

        lifestyle: "🏠 Lifestyle"

    };


    let html = `

        <div class="culture-content">

            <p class="small-title">
                EXPLORE CULTURE
            </p>

            <h2>
                ${titles[category]}
            </h2>

            <div class="culture-items">

    `;


    data.forEach(item => {

        html += `

            <div class="culture-item">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>

        `;

    });


    html += `

            </div>

        </div>

    `;


    details.innerHTML = html;


    details.classList.add("active");


    details.scrollIntoView({

        behavior: "smooth"

    });

}