# How To's & Helpers 




## Google Fonts 
[https://fonts.google.com](https://fonts.google.com/?preview.text=Random%20Loot%20Generator&preview.text_type=custom)


### How-To
**Step One:** Choose a font
![Choose a font main menu screen](resources/images/google-font-menu.png)


**Step Two:** Select the desired styles
![Details page](resources/images/google-font-roboto-detail.png)


**Step Three:** Copy the `@import`
![Import Link and Usage Example](resources/images/google-font-import-link-and-usage.png)


**Step Four:** Paste into `_variables.scss`

```SCSS
// Inside _variables.scss
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


```


**Step Five:** Create a variable for the font

```SCSS
// Inside _variables.scss
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

/* Fonts and Typography */

// Font Family

$roboto-font: 'Roboto', sans-serif;

```

**Step Six:** Use the new variable wherever desired. Don't forget to import the `_variables.scss` stylesheet first.

```SCSS
// Example usage 

@import './variables.scss';

p {
    font-family: $roboto-font;
}

```
## Angular 
[https://angular.io/start](https://angular.io/start)