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
        // Create reference to listLayout()
        let listLayout = listLayout()
        // Asign list layout to collection view layout.
        collectionView.collectionViewLayout = listLayout
        // Register cell
        let cellRegistration = UICollectionView.CellRegistration {
            (cell: UICollectionViewListCell, indexPath: IndexPath, itemIdentifier: String ) in
            let reminder = Reminder.sampleData[indexPath.item]
            // Create content configuration
            var contentConfiguration = cell.defaultContentConfiguration()
            contentConfiguration.text = reminder.title
        }
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
