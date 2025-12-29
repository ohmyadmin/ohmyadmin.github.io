import {InitialsPipe} from 'component-library';
import {describe, it, expect} from 'vitest';

describe('InitialsPipe', () => {
  const pipe = new InitialsPipe()

  it('should return "UU" for an empty string', () => {
    expect(pipe.transform('')).toBe('UU');
  });

  it('should return "UU" for a string with only whitespace', () => {
    expect(pipe.transform('   ')).toBe('UU');
  });

  it('should return the first letter capitalized for a single name', () => {
    expect(pipe.transform('craig')).toBe('C');
  });

  it('should return the first and last initials for a two-part name', () => {
    expect(pipe.transform('craig wayne')).toBe('CW');
  });

  it('should return the first and last initials for a multi-part name', () => {
    expect(pipe.transform('craig wayne govender')).toBe('CG');
  });

  it('should handle names with extra spacing between words', () => {
    expect(pipe.transform('  craig   wayne  ')).toBe('CW');
  });
});
