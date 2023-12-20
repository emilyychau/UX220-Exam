# UX220Final

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/emilyychau/UX220-Exam)

Each question is worth 5 points

1. Compare and contrast the following 2 forms:

`<form action="http://localhost:3002/send/" method="post"> ... </form>`

`<form action="https://dry-bayou-18746.herokuapp.com/send/" method="post"> ... </form>`

Pay special attention to why one or the other won't work on github pages. Write a semantically formatted html file in q1.html that 
includes doctype, html, head, body, header, footer, main, h1 ("Post action attribute"), h2 ("http://localhost:3002/send/" and 
"https://dry-bayou-18746.herokuapp.com/send/") and p tags in the correct place. 
The paragraphs in the html file should contain whether each will work on github pages and why or why not.

Note: It is fine for you to just use the url of the action attribute in your level 2 headings.

2. The following code is for a simple magic 8 ball. Change the code so that:

a) before anything is typed in to the input there is a prompt in lighter text that says "ask me anything"

b) the answer is written in red text

c) the answer has twice the normal height

d) the answer is written in a handwriting font of your choosing from https://fonts.google.com

![q2 sample output](readmeimages/q2.png)

3. Put the following code in to a complete html page with a:

1) doctype declaration

2) an opening and closing tag that specifies the language of the document

3) a portion of the document that describes information about the document including the way that the viewport is scaled for mobile

4) a portion of the document that contains the content

5) add an html 5 semantic tag at the end of the document that includes a copyright notice with the year supplied by a custom element.

```
<h1>Where in the world is Rich</h1>
<p>Rich was here</p>
```

![q3 sample output](readmeimages/q3.png)

4. List a total of 5 pros and cons of png related to jpg images. Use a <main> tag to enclose the 2 lists with appropriate level 
headings for a screen reader as though the whole document is on this subject. For example:

![q4 sample output](readmeimages/q4.png)

5. The snippet of html in q5.html produces different images for portrait and landscape orientations.
Make the image accessible on mobile by:

a) adding a tag to make it scale 1 to 1

b) making the image fit within the viewport no matter what the width of the device

c) providing text for a screen reader to read when it encounters the image

d) providing an element that displays in the browser bar that a screen reader can also read to identify the tab of the browser

e) fix an issue with the provided headings that are problematic for screen readers

![mobile in simulator](readmeimages/q5a.png)

![desktop view](readmeimages/q5b.png)
