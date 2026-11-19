import { test, expect } from "vitest";
import { suma } from "./suma.js";

test("suma 2 + 3 = 5", () => {
  expect(suma(2, 3)).toBe(6);
});