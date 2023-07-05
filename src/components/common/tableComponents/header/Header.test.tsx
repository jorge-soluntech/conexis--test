import { render, screen } from '@testing-library/react';
import React from 'react';

import { AuthContext } from '@/application/authContext';
import type { IUser } from '@/application/authContext/IUser';
import { BUYERS_TABLE_TEXT } from '@/consts';
import { DASHBOARDTYPES } from '@/consts/permissions';

import Header from './Header';

describe('Header dashboard component', () => {
  const user: IUser = {
    _id: '',
    username: '',
    password: '',
    tenant: 1,
    role: 'MSP Administrator',
  };

  const setup = () =>
    render(
      <AuthContext.Provider
        value={{
          ...({} as any),
          user,
        }}
      >
        <Header
          type={DASHBOARDTYPES.buyer}
          titleForm={BUYERS_TABLE_TEXT.title_buyers_table}
          hasSearchInput={false}
          subTitleForm={BUYERS_TABLE_TEXT.sub_title_buyers_table}
        />
      </AuthContext.Provider>
    );

  it('The title and subtitle should be rendered', async () => {
    setup();
    expect(screen.getByText('Manage Buyers')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Here you will find information for all buyers you have access to.'
      )
    ).toBeInTheDocument();
  });

  it('there should be a “add buyer” button', () => {
    setup();
    expect(
      screen.getByRole('button', { name: /Add buyer/i })
    ).toBeInTheDocument();
  });

  it('there should be render an input with the placeHolder “Search by” when the hasSearchInput is true', () => {
    render(
      <Header
        type={DASHBOARDTYPES.buyer}
        titleForm={BUYERS_TABLE_TEXT.title_buyers_table}
        hasSearchInput={true}
        subTitleForm={BUYERS_TABLE_TEXT.sub_title_buyers_table}
        handleSearchChange={(value: string) => {
          return value;
        }}
      />
    );
    expect(screen.getByPlaceholderText('Search by')).toBeInTheDocument();
  });
});
