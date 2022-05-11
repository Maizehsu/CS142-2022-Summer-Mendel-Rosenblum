<h1 align="center">Intro to HTML and CSS</h1>

<h4 align="center">Unlike other notes, this note contains only HTML and CSS</h4>

<p align="center">HTML=“nested boxes”</p>

<p align="center">CSS=“a list of descriptions”</p>

<p align="center">A description in the CSS affects a box in the HTML</p>

![image-20220504190925888](../../../GitHub/FigureBed/image-20220504190925888.png)

- Tags such as <h1> have some default styling while <div> and <span> do
    not.
- Any custom applied CSS rules will overwrite it!

<h4 align="center"> ID vs Class </h4>

#### ID

- An element can have only
  one ID

- `<div id="thisisanid">`

- IDs must be unique in any
  given HTML document

- ~~~css
  #id {
  …
  }
  ~~~

#### Class

- An element can have
  multiple classes

- `<div class="class1
  class2 class3">`

- Can use the same class
  on multiple elements

- ~~~css
  - .classname {
    …
    }
  ~~~

