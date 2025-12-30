import {describe, expect, it} from 'vitest';
import {WholeNumberPipe} from './whole-number.pipe';

describe('WholeNumberPipe', () => {
  const pipe = new WholeNumberPipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 0 if the value is undefined', () => {
    expect(pipe.transform(undefined)).toBe(0);
  });

  it('should return 0 if the value is not a number', () => {
    expect(pipe.transform('not a number')).toBe(0);
  });

  it('should return the whole number if the value is a numeric string', () => {
    expect(pipe.transform('123')).toBe(123);
  });

  it('should return the whole number if the value is a number', () => {
    expect(pipe.transform(456)).toBe(456);
  });

  it('should return 0 if the value is a negative number', () => {
    expect(pipe.transform(-789)).toBe(0);
  });

  it('should return 0 if the value is a negative numeric string', () => {
    expect(pipe.transform('-123')).toBe(0);
  });

  it('should truncate floating point numbers', () => {
    expect(pipe.transform(12.34)).toBe(12);
  });

  it('should truncate floating point numeric strings', () => {
    expect(pipe.transform('56.78')).toBe(56);
  });
});
