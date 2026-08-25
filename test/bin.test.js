import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("package.json has expected name", () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  assert.equal(pkg.name, "@b4moss/mpa-html-site-starter");
});

test("bin entry exists", () => {
  const binDir = path.join(root, "bin");
  assert.ok(fs.existsSync(binDir));
  const files = fs.readdirSync(binDir);
  assert.ok(files.length > 0);
});
