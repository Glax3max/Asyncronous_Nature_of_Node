interface Notification2 {
    send(
        message:string
    ):void;
}


/**
 * Email notification class
 */
class EmailNotification implements Notification2 {
    send(message:string):void {
        console.log(`Sending the notification by email : ${message}`)
    }
}



/**
 * SMS notification class
 */
class SMSNotification implements Notification2 {
    send(message:string):void {
        console.log(`Sending the notification by SMS : ${message}`)
    }
}


/**
 * Push notification class
 */
class PushNotification implements Notification2 {
    send(message:string):void {
        console.log(`Sending the notification by Push : ${message}`)
    }
}



class NotificationFactory{
    /**
     * Creating the notification type here .Like how a factory make a car on an order.
     */
    createNotification(
        type:string,
    ):Notification2{
        switch(type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid input")
            }
    }
}


class NotificationSystem{
    constructor(
        private readonly factory:NotificationFactory
    ){}
    /*
     * Sending message
     */
    sendMessage(
        type:string,
        message:string
    ):void {
        const notification = this.factory.createNotification(type);
        notification.send(message);
    }
}


/**
 * Creating the objects
 */

const noti = new NotificationSystem(new NotificationFactory())

noti.sendMessage('email',"Hello from email")
noti.sendMessage('push',"Hello from push notification")
noti.sendMessage('sms',"Hello from sms notification")