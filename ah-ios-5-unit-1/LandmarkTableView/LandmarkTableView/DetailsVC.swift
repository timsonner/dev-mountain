//
//  DetailsVC.swift
//  LandmarkTableView
//
//  Created by Timothy Sonner on 10/24/22.
//

import UIKit

class DetailsVC: UIViewController {

    @IBOutlet weak var landmarkLabel: UILabel!
    @IBOutlet weak var landmarkImage: UIImageView!
    
    var selectedLandmarkImage = UIImage()
    var selectedLandmarkName = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        landmarkLabel.text = selectedLandmarkName
        landmarkImage.image = selectedLandmarkImage
    }

}
