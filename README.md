Telephone System with Observers

This JavaScript code defines a simple telephone system using object-oriented principles. The system allows users to add phone numbers, dial them, and notifies registered observers when a dialing action occurs.

Classes

1. Telephone Class

Manages a set of phone numbers and a list of observers.
Provides methods to add, remove, and dial phone numbers.
Notifies registered observers when a phone number is dialed.

2. PhoneNumberObserver Class

Implements an observer interface to log dialed phone numbers.

3. CustomObserver Class

Another example observer that logs dialed phone numbers with a custom message.

Usage Example

Creates an instance of the Telephone class.
Adds two observers, PhoneNumberObserver and CustomObserver.
Takes user input for adding a phone number.
Takes user input for dialing a phone number.
Notifies observers when a phone number is dialed.