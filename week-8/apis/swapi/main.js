const buttonResidents = document.getElementById('button-residents')

const handleClick = () => {
    console.log(`button-residents clicked`)
    axios.get('https://swapi.dev/api/planets/?search=alderaan').then(resultsCallback)
}

buttonResidents.addEventListener('click', handleClick)

const resultsCallback = (res) => {
    const {results: [{residents}]} = res.data
console.log(residents)
residents.forEach(element => {
    axios.get(element).then(displayResults)
});
}

const displayResults = ({data: data}) => {
    console.log(data.name)
    const heading2 = document.createElement("h2");
    heading2.textContent = data.name
    document.body.appendChild(heading2);
}

