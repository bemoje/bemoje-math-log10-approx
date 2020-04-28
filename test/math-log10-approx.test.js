import log10 from '../src/math-log10-approx'

describe('log10', () => {
	test('works', () => {
		expect(log10(0)).toBe(0)
		expect(log10(1)).toBe(0)
		expect(log10(5)).toBe(0)
		expect(log10(10)).toBe(1)
		expect(log10(100)).toBe(2)
		expect(log10(1000)).toBe(3)
		expect(log10(10000)).toBe(4)
		expect(log10(105000)).toBe(5)
		expect(log10(1000200)).toBe(6)
		expect(log10(10000010)).toBe(7)
		expect(log10(100051000)).toBe(8)
		expect(log10(1005100000)).toBe(9)
		expect(log10(10055100727920584576600)).toBe(9)
		expect(log10(100551007279206235576600)).toBe(9)
	})
})
