const { formatBytes, formatBytesToBytes } = require('../src/formatBytes.js');

test('formatBytesToBytes(1024, "MB") -> 1073741824', () => {
    expect(formatBytesToBytes(1024, 'MB')).toBe(1073741824);
});

test('formatBytesToBytes(0, "MB") -> 0', () => {
    expect(formatBytesToBytes(0, 'MB')).toBe(0);
});

test('formatBytes(1024, { from: "MB", to: "GB" }).amount -> 1', () => {
    expect(formatBytes(1024, { from: 'MB', to: 'GB' }).amount).toBe(1);
});

test('formatBytes(0, { from: "MB", to: "GB" }).amount -> 0', () => {
    expect(formatBytes(0, { from: 'MB', to: 'GB' }).amount).toBe(0);
});

test('formatBytes(0, { from: "MB", to: "MB" }).prefix -> 0', () => {
    expect(formatBytes(0, { from: 'MB', to: 'MB' }).prefix).toBe('MB');
});

test('formatBytes(0, { from: "MB", to: "MB" }).amount -> 0', () => {
    expect(formatBytes(0, { from: 'MB', to: 'MB' }).amount).toBe(0);
});

test('formatBytes(1024, {from: "MB", to: "GB"}).prefix -> GB', () => {
    expect(formatBytes(1024, { from: 'MB', to: 'GB' }).prefix).toBe('GB');
});
