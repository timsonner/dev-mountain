import UIKit

var favoriteVehicle = "camel"

struct Person {
    var name: String
    var favoriteCar: String
}

enum Car: String {
    case chevy = "Chevy"
    case ford = "Ford"
    case volkswagen = "Volkswagen"
    case gmc = "GMC"
    case jeep = "Jeep"
}

let p1: Person = Person(name: "Ivan", favoriteCar: Car.jeep.rawValue)
let p2: Person = Person(name: "p2", favoriteCar: Car.ford.rawValue)
let p3: Person = Person(name: "p3", favoriteCar: Car.volkswagen.rawValue)
let p4: Person = Person(name: "p4", favoriteCar: Car.gmc.rawValue)
let p5: Person = Person(name: "p5", favoriteCar: Car.chevy.rawValue)

var people = [p1, p2, p3, p4, p5]

for person in people {
    print("\(person.name)'s favorite car is \(person.favoriteCar)")
}
