import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import store from '../../store';
import Game from '.';

describe('Component Tests', () => {
  /* set */
  const squares = Array(9).fill(null);
  const component = <Game store={store} nextPlayer="X" squares={squares} />;

  // State Values before/after Click on Button#4
  test('State Values before/after Click on Button#4', () => {
    const wrapper = shallow(component).dive();
    const instance = wrapper.instance();

    /* before */
    expect(wrapper.state('nextPlayer')).toBe('X');

    /* after */
    let gameSetAction = true;
    store.subscribe(() => {
      if (gameSetAction) {
        // Firstly 'GameSet' is expected to be dispatched
        expect(store.getState().game.squares[4]).toBe('X');
        gameSetAction = false;
      } else {
        // ... then 'StatusSet'
        expect(store.getState().status.nextPlayer).toBe('O');
      }
    });
    instance.onSelect(4);
  });

  // Snapshot
  test('Snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
