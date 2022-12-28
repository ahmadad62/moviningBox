
![Gif](chrome-capture-2022-11-28.gif)
This code uses event listeners to define various mouse and keyboard events for a DOM element with the id "container". When certain events occur, the script changes the appearance and behavior of the element in response.

For example, when the user clicks on the element, the element's background becomes hot pink, its border radius becomes 50%, and it animates with the "puff-out-center" class. When the user moves the mouse out of the element, the element's border radius and border are reset.

The script also listens for the "mousemove" event and moves the element in the direction of the mouse when it is within a certain range of the element. Additionally, when the user clicks anywhere on the page, the element moves to the location of the click.

The script also logs the distance of the element's left side from the left edge of the screen to the console.