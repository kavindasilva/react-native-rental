

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import Login from './Login'
import * as loginService from '../services/loginService';
import userEvent from '@testing-library/user-event';

var component, spy;

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

beforeEach(() => {
  component = render(<Login />);
  spy = jest.spyOn(loginService, 'login').mockResolvedValue({});
})

afterEach(() => {
  jest.clearAllMocks();
});

describe('initial page load', () => {
  it('should render username input', () => {
    expect(document.getElementById('txt_username').value).toBe('');
  });

  it('should render password input', () => {
    expect(document.getElementById('txt_password').value).toBe('');
  });

  it('should render submit button', () => {
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('should not have login error', () => {
    expect(screen.queryByRole('alert')).toBeNull(); //
  });

  it('should not call login', () => {
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('click Login', () => {
  it('should call login when Login button clicked', () => {
    waitFor(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    expect(spy).toHaveBeenCalledWith('', '');
  });

  it('should call login with typed username password', () => {
    waitFor(async () => {
      userEvent.type(document.getElementById('txt_username'), 'someUsername')
      userEvent.type(document.getElementById('txt_password'), 'somePassword')

      await userEvent.click(screen.getByRole('button'));
    });

    expect(spy).toHaveBeenCalledWith('someUsername', 'somePassword');
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('should show error when username password not correct', () => {
    spy = jest.spyOn(loginService, 'login').mockRejectedValue('promiseErrorString');

    waitFor(async () => {
      await userEvent.click(screen.getByRole('button'));
    });

    expect(spy).toHaveBeenCalledWith('', '');

    waitFor(async () => {
      const loginFailedAlert = await screen.findAllByText('promiseErrorString');
      expect(loginFailedAlert).not.toBeNull();
    });

  });

  it('should not show error when username password are correct', () => {
    waitFor(async () => {
      await userEvent.click(screen.getByRole('button'));
    });
    expect(spy).toHaveBeenCalledWith('', '');

    waitFor(async () => {
      const loginFailedAlert = await screen.queryByRole('alert');
      expect(loginFailedAlert).toBeNull();
    });
  });
});

