import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import { SearchBar } from '../SearchBar';
import { labels } from '../../localization/localization';
import { TestProvider } from '../../../testUtils/TestProvider';

test('Providing username triggers fetching for that username', async () => {
  const fetch = jest.fn(() => ({ data: [] }));
  const username = 'TEST';
  const { getByPlaceholderText } = render(
    <TestProvider fetchMock={fetch}>
      <SearchBar />
    </TestProvider>,
  );
  const input = getByPlaceholderText(labels.INPUT_PLACEHOLDER) as HTMLInputElement;
  await act(async () => {
    fireEvent.change(input, { target: { value: username } });
    fireEvent.keyDown(input, { key: 'Enter' });
  });
  expect(fetch).toBeCalledTimes(2);
  expect(fetch).toBeCalledWith(`users/${username}`);
  expect(fetch).toBeCalledWith(`users/${username}/repos`);
});
