import { configDelete, configGet, configPost, configPut } from './configFetch';
import apiClient from './index';

jest.mock('axios');

describe('Config Fetch', () => {
  it('should return object get fetch', () => {
    expect(configGet('your url')).toEqual({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer undefined`,
      },
      method: 'get',
      url: 'your url',
    });
  });

  it('should return object post fetch', () => {
    expect(configPost(['your url'], {})).toEqual({
      method: 'post',
      url: ['your url'],
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer undefined`,
      },
      data: {},
    });
  });

  it('should return object put fetch', () => {
    expect(configPut(['your url'], {})).toEqual({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer undefined`,
      },
      method: 'put',
      url: ['your url'],
      data: {},
    });
  });

  it('should return object delete fetch', () => {
    expect(configDelete(['your url'])).toEqual({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer undefined`,
      },
      method: 'delete',
      url: ['your url'],
    });
  });

  it('should apiClient return undefined', async () => {
    // given
    const mockData = undefined;

    // when
    const result = await apiClient(null);

    // then
    expect(result).toEqual(mockData);
  });
});
