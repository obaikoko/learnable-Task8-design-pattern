
const readline = require('readline');
class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(phoneNumber) {
    this.observers.forEach((observer) => observer.notify(phoneNumber));
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dialPhoneNumber(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      this.notifyObservers(phoneNumber);
      console.log(`Now Dialling ${phoneNumber}`);
    } else {
      console.log('Cannot dial. Phone number not added.');
    }
  }
}

class PhoneNumberObserver {
  notify(phoneNumber) {
    console.log(phoneNumber);
  }
}

class CustomObserver {
  notify(phoneNumber) {
    console.log(`Now Dialling ${phoneNumber}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Example usage
const telephone = new Telephone();

const observer1 = new PhoneNumberObserver();
const observer2 = new CustomObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

rl.question('Enter a phone number: ', (phoneNumber) => {
  telephone.addPhoneNumber(phoneNumber);

  rl.question('Dial a phone number: ', (dialNumber) => {
    telephone.dialPhoneNumber(dialNumber);
    rl.close();
  });
});
