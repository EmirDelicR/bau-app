import { testFunction } from 'src/util/helpers';

describe('testFunction', () => {
  it('should return string', () => {
    expect(testFunction('Node')).toBe('My name is Node');
  });
});
