import getValue from "../src/utils/get-value";
import { expect } from "chai";

describe("Typescript + Babel usage suite", () => {
  const obj = {
    a: 'string',
    b: {
      c: '1',
      d: ['0', 'string', undefined]
    },
    e: 'undefined',
  }

  it("Дожно возвращаться нужное значение", () => {
    expect(getValue(obj, 'a'), 'string');
    expect(getValue(obj, 'b.c'), '1');
    expect(getValue(obj, 'b.d.1'), 'string');
    expect(getValue(obj, 'b.d.2'), undefined);
    expect(getValue(obj, 'e'), 'undefined');
  });

  it("Дожно возвращаться 'undefined'", () => {
    expect(getValue(obj, 'j'), undefined);
  });
}); 