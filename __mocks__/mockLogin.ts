const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

export default mockLogin;
