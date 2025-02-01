export class StringUtils {
  static toFirstUpper(string: string): string {
    if (string.length === 0) return string;
    const first = string[0].toUpperCase();
    const rest = string.slice(1);
    return first + rest;
  }
}
