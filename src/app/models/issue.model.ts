import IIssue from './IIssue';

export default class Issue implements IIssue {
  constructor(
    public name: string,
    public status: string = 'NEW',
    public isCompleted: boolean = false,
    public description: string = '',
    public _id: string = ''
  ) {}
}
