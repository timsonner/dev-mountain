//
//  ViewController.swift
//  LandmarkTableView
//
//  Created by Timothy Sonner on 10/21/22.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    // Connect table view to view controller.
    @IBOutlet weak var landmarkTableView: UITableView!
    var landmarkNames = [String]()
    var landmarkImages = [UIImage]()
    
    var chosenLandmarkName = ""
    var chosenLandmarkImage = UIImage()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Declare view controller as the delegate
        landmarkTableView.delegate = self
        // Declare view controller as the data source
        landmarkTableView.dataSource = self
        // Static data
        landmarkNames.append("Desert")
        landmarkNames.append("Glacier")
        landmarkNames.append("Mountain")
        landmarkNames.append("Ocean")
        landmarkNames.append("Rainforest")
        // Static data
        landmarkImages.append(UIImage(named: "desert.jpg")!)
        landmarkImages.append(UIImage(named: "glacier.jpg")!)
        landmarkImages.append(UIImage(named: "mountain.jpg")!)
        landmarkImages.append(UIImage(named: "ocean.jpg")!)
        landmarkImages.append(UIImage(named: "rainforest.jpg")!)
        
    }
    // Provide conformance to ui table view delegate and ui table view data source.
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return landmarkNames.count // items displayed in sync with size of array
    }
    
    // Provide conformance to ui table view delegate and ui table view data source.
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Create instance of ui table view cell.
        let cell = UITableViewCell()
        // Create content object with a default configuration.
        var content = cell.defaultContentConfiguration()
        // Set text property of the content object.
        content.text = landmarkNames[indexPath.row]
        // Asign the content configuration to the instance of ui table view cell.
        cell.contentConfiguration = content
        // Return the ui table view cell instance
        return cell
    }
    
    // Get index path of row selected by user
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        // On select, change view controller scene
        performSegue(withIdentifier: "toDetailsVC", sender: nil)
        // Update global var
        chosenLandmarkName = landmarkNames[indexPath.row]
        // Update global var
        chosenLandmarkImage = landmarkImages[indexPath.row]
    }
    // Controls the segue to the details view
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "toDetailsVC" {
            let destinationVC = segue.destination as! DetailsVC
            destinationVC.selectedLandmarkName = chosenLandmarkName
            destinationVC.selectedLandmarkImage = chosenLandmarkImage
        }
    }
    
    // Delete function
    func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            self.landmarkNames.remove(at: indexPath.row)
            self.landmarkImages.remove(at: indexPath.row)
            tableView.deleteRows(at: [indexPath], with: .fade)
        }
    }
}

