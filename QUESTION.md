
To get started, use the short "Cmd + Shift + V" to preview the markdown. Alternatively, click on the preview button on the top right corner.

## Question 
Why does my code throw an error?

### Code Snippets

[test/try.js#L10](test/try.js#L10)	
````js
function uncommittedFunction() {
  console.log("running function a");
  a();
}

````

### Terminal Output
````
running function a
/Users/angelpan/repo/test-github-api/test/try.js:21
  throw new Error("Hello this is a test");
  ^

Error: Hello this is a test
    at b (/Users/angelpan/repo/test-github-api/test/try.js:21:9)
    at a (/Users/angelpan/repo/test-github-api/test/try.js:16:3)
    at uncommittedFunction (/Users/angelpan/repo/test-github-api/test/try.js:12:3)
    at Object.<anonymous> (/Users/angelpan/repo/test-github-api/test/try.js:24:1)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
````
	