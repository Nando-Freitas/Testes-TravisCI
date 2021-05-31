const chai = require('chai');
const expect = chai.expect;
const Operacoes = require('../index.js');

let operacoes = new Operacoes();

describe('soma()', () => {
	it('Soma 2 + 2', () => {
		expect(operacoes.soma(2,2)).to.equal(4);
	});
	it('Verifica tipo do retorno', () => {
		expect(operacoes.soma(2,2)).to.be.a('number');
	});
});

describe('subtracao()', () => {
	it('Subtrai 2 - 2', () => {
		expect(operacoes.subtrai(2,2)).to.equal(0);
	});
});

describe('divide()', () => {
	it('Divide 2 / 2', () => {
		expect(operacoes.divide(2,2)).to.equal(1);
	});
});

describe('multiplica()', () => {
	it('Multiplica 2 * 2', () => {
		expect(operacoes.multiplica(2,2)).to.equal(4);
	});
});
