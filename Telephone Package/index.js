//CREATING A TELEPHONE CLASS  THAT SHOULD EXPOSE 3 PUBLIC METHODS - AddPhoneNumber, RemovePhoneNumber and DialPhoneNumber

class telephone{
    constructor(){
        this.phoneNumbers = []
        this.observers=[]
    }
    //ADDING PHONE NUMBER METHOD
    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push (phoneNumber);
    }
    //REMOVE PHONE NUMBER METHOD
    removePhoneNumber(phoneNumber){
        this.phoneNumbers.delete(phoneNumber);
    }
    //DIALING PHONE NUMBER METHOD
dialPhoneNumber(phoneNumber){
    if (!this.phoneNumbers.includes(phoneNumber)  ){
        return;

    }
    this.notifyObservers(phoneNumber);
}
addObservers(observer){
    this.observers.add(observer)
}
removeObserver(observer){
    this.observers.removeAt(this.observers.indexOf(observer,0));
}
//NOTIFYING THE OBSERVER WHICH WILL RETURN "The phone is been dialed"
notify(telephone){
    for(let observer of this.observers){
        observer.update(telephone)
        return;
        console.log("This telephone is been dialed");

    }
    
}
 

}
//INSTANCE FOR TELEPHONE CLASS
let newTelephone = new telephone();

//CLASS FOR OBSERVER
class observer {
    constructor() {}
    update=(telephone)=> {
        console.log(telephone);
    }
    }
    let observer1 = new observer();
    let observer2 = new observer();
    newTelephone.addObserver(observer1);
    newTelephone.addObserver(observer2);
{

    //ADDING 2 OBSERVERS TO THE TELEPHONE CLASS
    newTelephone.addObservers.has (observer1);
    newTelephone.addPhoneNumber(2347023232)
    
    observer1.update("Now dialing 2347023232 ");
}

