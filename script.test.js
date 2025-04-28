const { caesarCipher } = require('./script');

// Test encoding
test('encodes simple text correctly', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

// Test decoding
test('decodes simple text correctly', () => {
  expect(caesarCipher('def', 3, false)).toBe('abc');
});

// Test wrap-around from z to a
test('wraps from z to a correctly', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

// Test that non-letter characters stay the same
test('non-letters are unchanged', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

// Test with capital letters
test('works with uppercase letters', () => {
  expect(caesarCipher('ABC', 2)).toBe('CDE');
});
