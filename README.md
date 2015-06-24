#transformer.css
######A lightweight CSS transform plugin

##Install transformer.css

####Local link
1. Click Download ZIP on the right
2. Extract .zip to your project folder
3. Link in the header of your HTML file:
    ```html
    <link type="text/css" rel="stylesheet" href="YOUR_FILE_PATH/transformer.css" />
    ```
4. Remember to change YOUR_FILE_PATH to the correct file path of the CSS file

OR

####External HTML Link
Include this in the header of your HTML file
```
<link type="text/css" rel="stylesheet" href="//cdn.rawgit.com/rwlumino/transformercss/master/transformer.css" />
```

OR

####With CSS Import
Include this at the top of your css stylesheet
```css
@import url("//cdn.rawgit.com/rwlumino/transformercss/master/transformer.css") all;
```

## Install transformer.js
Try using transformer.js to trigger transformer.css on specific events (mouseover, click etc)

    ####External HTML Link
    Include this in the header of your HTML file
    ```
    <script type="text/javascript" src="//cdn.rawgit.com/rwlumino/transformercss/master/transformer.js" />
    ```

    OR

    ####Local link
    1. Click Download ZIP on the right
    2. Extract .zip to your project folder
    3. Link in the header of your HTML file:
        ```html
        <script type="text/javascript" src="YOUR_FILE_PATH/transformer.js" />
        ```
    4. Remember to change YOUR_FILE_PATH to the correct file path of the CSS file




##HTML Markdown examples
#### Basic Rotations / Flips
```html
<div class="down anim">down</div>
<div class="up anim">up</div>
<div class="left">left</div>
<div class="right">right</div>
<div class="flip-h">flip-h</div>
<div class="flip-v">flip-v</div>
```

#### Diagonal Rotations
```html
<div class="diag down">diagonal down</div>
<div class="diag up">diagonal up</div>
<div class="diag left">diagonal left</div>
<div class="diag right">diagonal right</div>
```

#### Animations
```html
<div class="anim diag down">animated diagonal down</div>
<div class="anim diag up">animated diagonal up</div>
<div class="anim slow left">slow animated diagonal left</div>
<div class="anim med right">med animated diagonal right</div>
```

#### Elements transform when clicked
```html
<div class="onclick anim diag down">animated diagonal down</div>
<div class="onclick anim up">animated diagonal up</div>
<div class="onclick anim left">slow animated diagonal left</div>
<div class="onclick anim right">med animated diagonal right</div>
```

#### Elements transform when hovered
```html
<div class="onhover anim diag down">animated diagonal down</div>
<div class="onhover anim up">animated diagonal up</div>
<div class="onhover anim left">slow animated diagonal left</div>
<div class="onhover anim right">med animated diagonal right</div>
```



