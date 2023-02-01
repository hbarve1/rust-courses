import("../pkg")
  .catch((e) => console.error("Failed loading Wasm module:", e))
  .then((rust) => rust.hello_world());
