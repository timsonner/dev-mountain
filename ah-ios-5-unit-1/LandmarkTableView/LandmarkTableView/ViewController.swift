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
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Declare view controller as the delegate
        landmarkTableView.delegate = self
        // Declare view controller as the data source
        landmarkTableView.dataSource = self
    }
    
    // Provide conformance to ui table view delegate and ui table view data source.
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 15
    }
    
    // Provide conformance to ui table view delegate and ui table view data source.
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // Create instance of ui table view cell.
        let cell = UITableViewCell()
        // Create a content object with default configuration.
        var content = cell.defaultContentConfiguration()
        // Set text of the content.
        content.text = "Text"
        content.secondaryText = "Secondary"
        // Asign the content configuration to the instance of ui table view cell.
        cell.contentConfiguration = content
        return cell
    }
}

