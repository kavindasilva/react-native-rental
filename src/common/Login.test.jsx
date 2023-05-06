

import React from 'react';
import { render, screen } from '@testing-library/react'

import Login from './Login'
import * as loginService from '../services/loginService';
import userEvent from '@testing-library/user-event';

var component, spy;

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

beforeAll(() => {
  // const user = userEvent.setup();
});

beforeEach(() => {
  component = render(<Login />);

  spy = jest.spyOn(loginService, 'login').mockImplementation(() =>
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({});
      }, 200)
    })
  );
})

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
  it('should call login', () => {
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledWith('', '');
  });

  it('should call login with typed username password', () => {
    userEvent.type(document.getElementById('txt_username'), 'someUsername')
    userEvent.type(document.getElementById('txt_password'), 'somePassword')

    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledWith('someUsername', 'somePassword');

    expect(screen.queryByRole('alert')).toBeNull(); //
  });
});

