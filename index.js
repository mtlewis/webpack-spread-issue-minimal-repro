import assert from 'assert';
import A from './a';

function go() {
  const { first, ...A } = {
    first: 'the first',
    greeting: 'hello world!'
  };

  assert.deepStrictEqual(A, { greeting: 'hello world!' }, 'Variable A has the wrong value!');
};

go();
