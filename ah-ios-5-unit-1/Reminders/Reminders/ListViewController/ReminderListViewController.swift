//
//  ViewController.swift
//  Reminders
//
//  Created by Timothy Sonner on 10/19/22.
//

import Foundation
import UIKit

class ReminderListViewController: UICollectionViewController {
    typealias DataSource = UICollectionViewDiffableDataSource<Int, String>
    typealias SnapShot = NSDiffableDataSourceSnapshot<Int, String>
    var dataSource: DataSource!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Create reference to listLayout()
        let listLayout = listLayout()
        // Asign list layout to collection view layout.
        collectionView.collectionViewLayout = listLayout
        // Register cell
        let cellRegistration = UICollectionView.CellRegistration {
            (cell: UICollectionViewListCell, indexPath: IndexPath, itemIdentifier: String) in
            let reminder = Reminder.sampleData[indexPath.item]
            // Create content configuration
            var contentConfiguration = cell.defaultContentConfiguration()
            // Retrieve the reminder corresponding to the item
            contentConfiguration.text = reminder.title
            // Asign content configuration to cell
            cell.contentConfiguration = contentConfiguration
        }
        // Initialize data source
        // Pass a closure that configures and returns a cell for a collection view
        dataSource = DataSource(collectionView: collectionView) { (collectionView: UICollectionView, indexPath: IndexPath, itemIdentifier: String) in
            // Reusing cells allows your app to perform well even with a vast number of items
            return collectionView.dequeueConfiguredReusableCell(using: cellRegistration, for: indexPath, item: itemIdentifier)
                }
        var snapshot = SnapShot()
        // map(_:) returns a new array containing only the reminder titles, which populate as items in the snapshot
        snapshot.appendSections([0])
        snapshot.appendItems(Reminder.sampleData.map {$0.title})
        dataSource.apply(snapshot)
        // Point collection view to the data source
        collectionView.dataSource = dataSource
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
