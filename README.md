# GLOWING HEART

[Glowing Heart](https://peterayodeji.github.io/glowing-heart) &mdash; Heart glowing with love for something is absolute favorite 💗

The UI component is such that displays an image and says double click on the image to heart it, there is also a count of how many times the image has been liked.

When a user double-click anywhere on this image, couple of things happen - a heart pop-up with a grow animation at the exact spot that the image was clicked and the number of likes is also updated.

In the Javascript, a double-click event was set and it basically insert the heart in the exact position where the click happens. This is achieved through the provided event parameter, that is the event object - using particularly the clientX, the clientY values, the event target offsetLeft and offsetTop to calculate the exact position of the image that was clicked, this position then becomes where the heart element comes in at the top and at the left.

Instead of just using 'dblclick' event, this project made use of just a click event. A tailor-made double-click event was created based on time between clicks.

👉 See it in action: [Glowing Heart Demo](https://peterayodeji.github.io/glowing-heart)
