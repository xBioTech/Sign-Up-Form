# Sign Up Form

## Live Demo

[Click me to see the Live Demo!](https://xbiotech.github.io/Tic-Tac-Toe-Game/)

[![Sign Up Form Desktop Preview](https://i.gyazo.com/b1f833b095cde940c655fc47c6c7a482.gif?autoplay=1&loop=1)](https://gyazo.com/b1f833b095cde940c655fc47c6c7a482)

[![Sign Up Form Mobile Preview](https://i.gyazo.com/0cab51c9f44361151be82d01e4f18361.gif?autplay=1&loop=1)](https://gyazo.com/0cab51c9f44361151be82d01e4f18361)

## Welcome! :wave:

Thanks for checking out my Project.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Learning resources](#learning-resources)
  - [Feedback](#got-feedback-for-me)

## Overview

### The project

this is a fully responsive Sign Up Form with client-side form validation and custom form validation

This project was created as part of the Odin Project curriculum, an open-source web development education platform. The purpose of this project was to learn and practice new web development skills.

## My process

### Built with

- HTML5
- CSS
- Flexbox
- Mobile-First Workflow
- JavaScript

### What I learned

- how to work with forms in HTML and CSS
- client-side Form validation
- custom form validation
- how to create a animation using CSS keyframes

I added some small code snippets below to illustrate my workwise

```html
<form class="form" action="get" method="">
  <!-- some code -->

  <div class="firstname">
    <label for="fname"
      ><img class="usericon" src="icons8-nutzername-32.png" alt="user" />
      <input type="text" name="firstname" id="fname" required minlength="2" />
      <span>First Name</span>
    </label>
  </div>

  <!-- some code -->
</form>
```

```css
@keyframes float {
  0% {
    transform: translate(-50%, 0%);
  }

  50% {
    transform: translate(-50%, -40%);
  }

  100% {
    transform: translate(-50%, 0%);
  }
}

.scrollimg {
  /* some code */
  animation: float 3s ease-in-out infinite;
  /* some code */
}
```

```javascript
function checkForMatchingPasswords() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity(
      "Password mismatch alert! Your passwords need to be identical"
    );
  } else {
    confirmPassword.setCustomValidity("");
  }
}
```

### Learning resources

- [The Odin Project](https://www.theodinproject.com/)
- [W3Schools](https://www.w3schools.com/)
- [MDN](https://developer.mozilla.org/en-US/)
- [sitepoint](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)

## Got feedback for me?

I'm always down for some feedback! I'm constantly striving to improve my coding skills and take them to the next level, so if you have any thoughts or suggestions, don't hesitate to hit me up via email or Discord.

Thanks a ton for your help, and let's blast off together :rocket:

- E-Mail - [Dennis Schneider](mailto:biotech9261@gmail.com)
- Discord - [BioTech](https://discord.com/users/343126401450377217)
