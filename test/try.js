function main() {
  try {
    a();
  } catch (e) {
    console.log(" we got an error");
    console.error(e.message);
  }
}

function a() {
  b();
  throw new Error("This is another test");
}

function b() {
  throw new Error("Hello this is a test");
}

main();
