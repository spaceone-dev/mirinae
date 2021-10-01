import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './Badge';

describe('Badge', () => {
    test('renders correctly', () => {
        const tree = renderer
            .create(<Badge>Badge</Badge>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
