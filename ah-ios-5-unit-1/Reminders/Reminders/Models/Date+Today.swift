//
//  Date+Today.swift
//  Reminders
//
//  Created by Timothy Sonner on 10/20/22.
//

import Foundation

extension Date {
    // Computed string
    var dayAndTimeText: String {
        let timeText = formatted(date: .omitted, time: .shortened)
        // Check if reminder date is today.
        // If reminder is today, display `Today at Foo`, otherwise `Foo at Bar`.
        if Locale.current.calendar.isDateInToday(self) {
            // How the time is displayed
            let timeFormat = NSLocalizedString("Today at %@", comment: "Today at time format string")
            // Apply time format to string and return it.
            return String(format: timeFormat, timeText)
        } else {
            // Create a date styled for the current locale.
            let dateText = formatted(.dateTime.month(.abbreviated).day())
            let dateAndTimeFormat = NSLocalizedString("%@ at %@", comment: "Date and time format string")
            return String(format: dateAndTimeFormat, dateText, timeText)
        }
    }
    // Computed string
    var dayText: String {
        // If reminder date is today return `Today`.
        if Locale.current.calendar.isDateInToday(self) {
            return NSLocalizedString("Today", comment: "Today due date description")
        } else {
            // Return a formated date
            return formatted(.dateTime.month().day().weekday(.wide))
        }
    }
}
