import RequestService from '@/infrastructure/services/index';

jest.mock('./index');

const mockPayload = { data: { statusCode: 400 } };

describe('Validator RequestService', () => {
  // const validator = RequestService;

  it('defines loginUser()', () => {
    const apiFunc = jest
      .spyOn(RequestService, 'loginUser')
      .mockImplementationOnce((): any => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPayload),
        });
      });

    expect(apiFunc).toBeDefined();
  });

  it('defines emailForgotPassword()', () => {
    const apiFunc = jest
      .spyOn(RequestService, 'emailForgotPassword')
      .mockImplementationOnce((): any => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPayload),
        });
      });

    expect(apiFunc).toBeDefined();
  });

  it('defines updateForgotPassword()', () => {
    const apiFunc = jest
      .spyOn(RequestService, 'updateForgotPassword')
      .mockImplementationOnce((): any => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPayload),
        });
      });

    expect(apiFunc).toBeDefined();
  });

  it('defines setNewPassword()', () => {
    const apiFunc = jest
      .spyOn(RequestService, 'setNewPassword')
      .mockImplementationOnce((): any => {
        return Promise.resolve({
          json: () => Promise.resolve(mockPayload),
        });
      });

    expect(apiFunc).toBeDefined();
  });
});
