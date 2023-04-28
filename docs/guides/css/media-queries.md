# Media queries
Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser viewport width. 

## Usage
``` CSS
/* For screens narrower than 1250px */
@media (max-width: 1250px) {
  /* … */
}

/* For screens between 30em and 50em */
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

/* For landscape oriented devices */
@media (orientation: landscape)
```

## Sources
- [Mozilla - Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)