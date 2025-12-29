import {PixelsPipe} from 'component-library';
import {describe, it, expect} from 'vitest';

describe('PixelsPipe', () => {
  const pipe = new PixelsPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return undefined if the value is undefined', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('should return undefined if the value is null', () => {
    expect(pipe.transform(null)).toBeUndefined();
  });

  it('should return undefined if the value is an empty string', () => {
    expect(pipe.transform('')).toBeUndefined();
  });

  it('should return undefined if the value is not a number', () => {
    expect(pipe.transform('not a number')).toBeUndefined();
  });

  it('should return the value with "px" appended if it is a numeric string', () => {
    expect(pipe.transform('123')).toBe('123px');
  });

  it('should work with zero', () => {
    expect(pipe.transform('0')).toBe('0px');
  });

  it('should work with floating point numbers', () => {
    expect(pipe.transform('12.34')).toBe('12.34px');
  });
});
