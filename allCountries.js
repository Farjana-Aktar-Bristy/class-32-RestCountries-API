fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(countries => countries.map(function (country) {
        var displaycountry = `<div class="card" onclick="showCountryDetails(${country.name.official})" style="width: 18rem;cursor:pointer;">
                                    <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title text-center fw-bold">Name: ${country.name?.common}</h5>
                                            <h5 class="card-text">Capital: ${country.capital}</h5>
                                            <h5 class="card-text">Region: ${country.region}</h5>
                                            <h5 class="card-text">Is Independent: ${country.independent}</h5>
                                            <h5 class="card-text">Area: ${country.area}</h5>
                                            <h5 class="card-text">Population: ${country.population}</h5>
                                            <h5 class="card-text">PostalCode: ${country.postalCode?.format}</h5>
                                           
                                        </div>

                            </div>`
        var divElement = document.createElement("div");
        divElement.className = "col mt-2";
        divElement.innerHTML = displaycountry;
        document.getElementById("countryRow").appendChild(divElement);
    }));



