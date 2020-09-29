const NOTIFICATION_SCREEN_TIME = 3000;
const btn = document.getElementById("btn-notify");
const container = document.getElementById("notification-container");

btn.addEventListener("click", () => {
    createNotification("You clicked the button!", NOTIFICATION_SCREEN_TIME);
})


// Creates a notification in the container with a specified
// message and timeout, if timeout is negative then the notification
// is persistent and must be clicked by user to be removed
function createNotification(message, timeout){
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = message;
    container.appendChild(notification);

    notification.addEventListener("click", () => {
        notification.remove();
    })

    if (timeout >= 0){
        setTimeout(() => {
            notification.remove()
        }, timeout);
    }
}

