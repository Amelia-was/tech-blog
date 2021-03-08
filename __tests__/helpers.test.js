const { format_date, format_plural } = require('../utils/helpers');

test('format_date returns a formatted date string', () => {
    const date = new Date('2021-01-21 12:34:56');

    expect(format_date(date)).toBe('21 Jan 2021');
});

test('format_plural(string, num) returns correct plural form', () => {
    expect(format_plural('Book', 0)).toBe('Books');
    expect(format_plural('Book', 1)).toBe('Book');
    expect(format_plural('Book', 2)).toBe('Books');
});