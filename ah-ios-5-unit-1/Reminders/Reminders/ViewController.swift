//
//  ViewController.swift
//  Reminders
//
//  Created by Timothy Sonner on 10/19/22.
//

import Foundation
import UIKit

class ReminderListViewController: UICollectionViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    private func listLayout() ->
    UICollectionViewCompositionalLayout {
        // Create a list layout configuration.
        var listConfiguration = UICollectionLayoutListConfiguration(appearance: .grouped)
        // Assign values to layout configuration parameters.
        listConfiguration.showsSeparators = false
        listConfiguration.backgroundColor = .clear
        // Create and return a compositional layout.
        return UICollectionViewCompositionalLayout.list(using: listConfiguration)
    }

}
