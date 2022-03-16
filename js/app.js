console.log('js added');

const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>displayCountries(data))
}

const displayCountries=(countries)=>{
    console.log(countries[0]);
    const allCountriesHTML=countries.map(country=>getCountriesHTML(country));
    console.log(allCountriesHTML);
    const container=document.getElementById('countries-container');
    container.innerHTML=allCountriesHTML.join(' ');
}

const getCountriesHTML=(country)=>{
    return `
    <div class="country">
    <h2 class="text-center p-2">$country.name.common} </h2>
    <img src="${country.flags.png}">
    </div>
    `;
}

// passing multiple variable..passing object as a variable

/* const getCountriesHTML=({name,flags})=>{
    return `
    <div class="country">
    <h2 class="text-center p-2">$name.common} </h2>
    <img src="${flags.png}">
    </div>
    `;
} */
// using destructuring

/* const getCountriesHTML=(country)=>{
    const {name,flags}=country;
    return `
    <div class="country">
    <h2 class="text-center p-2">${name.common} </h2>
    <img src="${flags.png}">
    </div>
    `;
} */


// using object 
/* const getCountriesHTML=(country)=>{
    return `
    <div class="country">
    <h2 class="text-center p-2">$country.name.common} </h2>
    <img src="${country.flags.png}">
    </div>
    `;
} */

loadCountries();