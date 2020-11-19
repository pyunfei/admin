/**
 *
 * 合并多个模块化class
 * @param {...string[] | styles.x1 styles.x2} args
 * @return {x1 x2}  {string}
 */
const classnames = (...args: string[]): string => args.join(' ');

export { }