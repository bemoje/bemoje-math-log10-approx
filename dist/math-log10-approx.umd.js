(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type'), require('@bemoje/math-pow10-pre-computed')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type', '@bemoje/math-pow10-pre-computed'], factory) :
	(global = global || self, global['math-log10-approx'] = factory(global.assertArgs, global.assertType, global.POW10));
}(this, (function (assertArgs, assertType, POW10) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;
	POW10 = POW10 && Object.prototype.hasOwnProperty.call(POW10, 'default') ? POW10['default'] : POW10;

	/**
	 * Approximate the logarithm base 10 of a small integer.
	 * @param {number} x - The integer to approximate the logarithm of.
	 * @returns {number} The approximated logarithm of the integer.
	 */
	function log10(x) {
		assertArgs(x);
		assertType(Number, x);

		if (x < POW10[5]) {
			if (x < POW10[2]) {
				return x < POW10[1] ? 0 : 1
			}

			if (x < POW10[4]) {
				return x < POW10[3] ? 2 : 3
			}

			return 4
		}

		if (x < POW10[7]) {
			return x < POW10[6] ? 5 : 6
		}

		if (x < POW10[9]) {
			return x < POW10[8] ? 7 : 8
		}

		return 9
	}

	return log10;

})));
