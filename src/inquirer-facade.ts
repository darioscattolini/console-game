import inquirer, { Inquirer } from 'inquirer';

type Choice<T> = {
  name: string;
  value: T;
  short?: string;
};

export class InquirerFacade {
  constructor(private inquirer: Inquirer) {}

  public async askForText(message: string): Promise<string> {
    const type = 'input';
    const name = this.getUniqueName();
    const answers = await this.inquirer.prompt([{ type, name, message }]);
      
    return answers[name];
  }

  public async askForNumber(message: string): Promise<number> {
    const type = 'number';
    const name = this.getUniqueName();
    const answers = await this.inquirer.prompt([{ type, name, message }]);
      
    return answers[name];
  }

  public async askToConfirm(message: string): Promise<boolean> {
    const type = 'confirm';
    const name = this.getUniqueName();
    const answers = await this.inquirer.prompt([{ type, name, message }]);
      
    return answers[name];
  }

  public async askToChooseOne(
    message: string, 
    choices: string[]
  ): Promise<string>
  public async askToChooseOne(
    message: string, 
    choices: number[]
  ): Promise<number>
  public async askToChooseOne<T>(
    message: string,
    choices: Choice<T>[]
  ): Promise<T> 
  public async askToChooseOne<T, S extends string | number | Choice<T>>(
    message: string,
    choices: S
  ): Promise<T> {
    const type = 'list';
    const name = this.getUniqueName();
    const answers = await this.inquirer.prompt([
      { type, name, message, choices }
    ]);
      
    return answers[name];
  }

  public async askToChooseMany(
    message: string, 
    choices: string[]
  ): Promise<string[]>
  public async askToChooseMany(
    message: string, 
    choices: number[]
  ): Promise<number[]>
  public async askToChooseMany<T>(
    message: string,
    choices: Choice<T>[]
  ): Promise<T[]> 
  public async askToChooseMany<T, S extends string | number | Choice<T>>(
    message: string,
    choices: S
  ): Promise<T[]> {
    const type = 'checkbox';
    const name = this.getUniqueName();
    const answers = await this.inquirer.prompt([
      { type, name, message, choices }
    ]);
      
    return answers[name];
  }

  private getUniqueName(): string {
    return Math.floor((Math.random() * 1000000)).toString();
  }
}

export default new InquirerFacade(inquirer);
