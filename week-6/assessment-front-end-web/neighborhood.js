class Restaurant{
    constructor(name, description, website, address) {
        this.name = name
        this.description = description
        this.website = website
        this.address = address
    }
}
const locations =[
    new Restaurant("Pizza Cafe","Best pizza in the valley", "https://www.facebook.com/PizzaCafeMT/","62945 US Highway 93, Ronan, MT 59864"), 
    new Restaurant("Fiesta En Jalisco", "Good Enchiladas", "http://fiestaenjalisco.net/index_m.html", "110 Main St, Polson, MT 59860"),
    new Restaurant("Lynn's Drive-In", "Amazing burgers", "", " 12 Eisenhower St SW, Ronan, MT 59864"),
    new Restaurant("Mrs. Wonderful's Café", "Baked goods, bistro fare",  "https://www.mrswonderfulworld.com", "103b 3rd Ave E, Polson, MT 59860"),
    new Restaurant("Oaks Korean Kitchen", "Phenomenal rice", "https://www.oakskoreankitchen.com", "50486 US-93, Polson, MT 59860"),
    new Restaurant("Post Creek 44 Bar Steak and Tap House", "Cowboy bar with smoked pork ribs","https://post-creek-steak-and-tap-house.business.site", "73124 U.S. 93 Saint Ignatius, MT 59865")
]




let button = document.getElementById('button-random')

const randomRestaurant = (evt) => {
    const random = Math.floor(Math.random() * locations.length);
console.log(random, locations[random]);
document.getElementById('li-name').textContent = locations[random].name
document.getElementById('li-description').textContent = locations[random].description
document.getElementById('a-website').textContent = locations[random].website
document.getElementById('li-address').textContent = locations[random].address

}
button.addEventListener('click', randomRestaurant)
