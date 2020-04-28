import POW10 from '@bemoje/math-pow10-pre-computed'

/**
 * Approximate the logarithm base 10 of a small integer.
 * @param {number} x - The integer to approximate the logarithm of.
 * @returns {number} The approximated logarithm of the integer.
 */
export default function log10(x) {
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
