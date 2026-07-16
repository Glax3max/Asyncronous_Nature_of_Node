"use strict";
class EmailNotification {
    send(message) {
        console.log(`Sending the notification by email : ${message}`);
    }
}
class SMSNotification {
    send(message) {
        console.log(`Sending the notification by SMS : ${message}`);
    }
}
class PushNotification {
    send(message) {
        console.log(`Sending the notification by Push : ${message}`);
    }
}
class NotificationFactory {
    createNotification(type) {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error("Invalid input");
        }
    }
}
class NotificationSystem {
    factory;
    constructor(factory) {
        this.factory = factory;
    }
    sendMessage(type, message) {
        const notification = this.factory.createNotification(type);
        notification.send(message);
    }
}
const noti = new NotificationSystem(new NotificationFactory());
noti.sendMessage('email', "Hello from email");
noti.sendMessage('push', "Hello from push notification");
noti.sendMessage('sms', "Hello from sms notification");
//# sourceMappingURL=NotificationSystem.js.map