const getInfo1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all")
    xhr.responseType = "json"
    xhr.onload = () => {
        const countries = xhr.response
        console.log(countries.filter( country => country.continent=="Asia" ))
    }
    xhr.send()
}
getInfo1()
