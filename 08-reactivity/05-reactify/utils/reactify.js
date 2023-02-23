import { computed, toRef } from 'vue';

/**
 * @template T
 * @param {function(...[*]): T} func - Исходная функция вычисления
 * @returns {function(...[*]): ComputedRef<T>} - Функция вычисления от ref-ов, возвращающая вычисляемое значение computed
 */
export function reactify(func) {
  // ...
  return (...args) => computed(() => {
    const values = args.map(arg => {
      return typeof arg === 'object' ?  arg.value : arg;
    });

    return func(...values)
  });
}
