import IIssue from './IIssue';

export default class Issue implements IIssue {
  constructor(public name: string, public id: string = '0') {}
}
