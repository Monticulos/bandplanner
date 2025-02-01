export class StringUtils {
  static toFirstUpper(string: string) {
    const first = string[0].toUpperCase();
    const rest = string.slice(1);
    return first + rest;
  }
}
