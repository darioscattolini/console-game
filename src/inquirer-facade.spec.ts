import { InquirerFacade } from './inquirer-facade';
import inquirer from 'inquirer';

const mockedInquirer = jest.mocked(inquirer);

describe('Inquirer facade', () => {
  let inqF: InquirerFacade;

  beforeEach(() => {
    inqF = new InquirerFacade(inquirer);
  });

  test('it is created', () => {
    expect(inquirer).not.toBeNil();
  });
});
