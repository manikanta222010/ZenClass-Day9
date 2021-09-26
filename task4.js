const getInfo4 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v2/all")
    xhr.responseType = "json"
    xhr.onload = () => {
        const countries = xhr.response
        let populationsArr=[]
        const sum = (a, b)=> a+b
        for (var country of countries) {  
            for(let j=0; j<(Object.keys(country)).length; j++){
                if((Object.keys(country))[j]=="population"){
                    populationsArr.push((Object.values(country))[j])
                }
            }
        }
        console.log(populationsArr.reduce(sum))
    }
    xhr.send()
}
getInfo4()
