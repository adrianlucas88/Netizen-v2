# Netizen-v2

This project is a presentation for my portfolio website. Here's a breakdown of the different components:

HTML File:
The head section contains the meta tags and links to the stylesheets and scripts required for the page. It also sets the title of the page.

The body section contains the main content of the page, which is divided into different sections using div elements and is using Bootstrap. The first section is the landing section that contains an image of the developer and three links that trigger modals. The second section is the About modal that provides a brief introduction to the developer. The third section is the Project modal that displays some of the developer's projects. The last section is the Contact modal that provides a form for users to contact the developer.

The img element displays the image of the developer.

The a elements with the class "hello" are the links that trigger the modals. Each link has a unique ID and is associated with a specific modal using the data-bs-target attribute.

The font element displays the text "Tap Anywhere!" and is used to prompt the user to interact with the page. It has a unique ID and is associated with a function called "tapScreen()" using the onclick attribute.

The div elements with the class "modal" are the modals that display information about the developer and their projects. Each modal has a unique ID and contains a header and a body. The header contains the title of the modal and a close button. The body contains the content of the modal, which is written using p and h elements.

The button elements with the class "btn-close" are used to close the modals.

The link elements with the rel attribute set to "stylesheet" and href attribute set to external stylesheets are used to link to the stylesheets required for the page.

The link element with the rel attribute set to "shortcut icon" and href attribute set to the URL of an image is used to display a favicon.

The script element with src attribute set to an external script is used to import a script required for the page.

CSS File:
The first section sets the default font size for the HTML element, the background color of the HTML and body elements, and hides overflow on the HTML element.
The .bck-container class sets the background color and height of an HTML container element.
The a element style sets the color of the text decoration to green.
The .hello class defines a large text element with orange color, bold font-weight, centered text alignment, and a cursor that changes on hover. This is likely used as a greeting or headline.
The .text-middle class sets a top margin for a text element, likely used to center it vertically on the page.
The .menu class defines a large text element with red color, bold font-weight, and left padding. This is likely used for a menu or navigation.
The .info class sets the position and size of a text element at the bottom of the page, likely used for additional information or credits.
The media query section adjusts the styles for smaller screen sizes, including adjusting the font size and position of the .hello and .menu classes, and repositioning the .text-middle class.
The .ball class defines a circular element with a border-radius of 100% and 50% opacity, which could be used for decorative or visual effects.

JS File:
The JavaScript code has two parts, each of which performs a different function. The first part is responsible for creating a menu animation, while the second part creates a background animation using randomly generated balls.

The menu animation code begins by selecting three HTML elements using document.getElementById(). These elements represent the three items in the menu. Event listeners are then added to each of these elements, listening for a mouseover event to trigger the animation. When the mouse hovers over an element, its inner text is replaced with a new value, and a CSS class is toggled on the element, which triggers a transition effect. When the mouse moves away from the element, the original text and class are restored. There is also a function for handling double-tap events on mobile devices.

The background animation code generates a specified number of div elements with the class ball and randomizes their position, color, size, and movement animation. The animation is created using the Web Animations API, which uses a keyframe animation with randomly generated duration, direction, and easing. The end result is a constantly moving and changing background of colorful balls.

Overall, this code provides a fun and visually engaging experience for users on the web page.


The PHP file handle the form submission. It first checks if the form has been submitted with an 'Email' variable using the isset() function. It then sets up the recipient email address and subject for the email.

A function named problem() is defined that displays an error message if there are any errors with the form submission. The expected data such as 'Name', 'Email', and 'Message' are checked to see if they are set. If any of them are not set, the problem() function is called.

The values of 'Name', 'Email', and 'Message' are assigned to variables. Then the variables are checked for any errors using regular expressions. If there are any errors, they are added to an error message string. If the length of the error message string is greater than zero, the problem() function is called.

The clean_string() function is defined that replaces any bad strings with empty strings. The form data is then concatenated to create the email message body.

Finally, the email headers are set up and the email is sent using the mail() function. If the email is sent successfully, a success message is displayed.
