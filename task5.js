const getInfo5 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all")
    xhr.responseType = "json"
    xhr.onload = () => {
        const countries = xhr.response

        for (var country of countries) {
            for (const key in country) {
                if (key == "currencies") {
                    for (const code in country[key][0]) {
                        if (country[key][0][code] == "USD") {
                            console.log(country.name, "Currency: USD")
                        }
                    }
                }
            }
        }
    }
    xhr.send()
}
getInfo5()
