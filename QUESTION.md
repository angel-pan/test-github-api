
To get started, use the short "Cmd + Shift + V" to preview the markdown. Alternatively, click on the preview button on the top right corner.

## Question 
asdf

### Code Snippets

[test/try.js#L10](test/try.js#L10)	
````js
function uncommittedFunction() {
  console.log("running function a");
  a();
}

````

[test/try.js#L10](test/try.js#L10)	
````js
function uncommittedFunction() {
  console.log("running function a");
  a();
}

function a() {
  b();
  throw new Error("This is another test");
}

function b() {
  throw new Error("Hello this is a test");

````

### Terminal Output
````
asdf
````
	