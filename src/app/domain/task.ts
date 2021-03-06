export class Task {

  id: string;
  name: string;
  assignee: string;
  description: string;
  executionId: string;
  owner: string;
  processInstanceId: string;
  createTime: number;
  taskDefinitionKey: string;
  dueDate: string;
  parentTaskId: string;
  tenantId: string;
  taskLocalVariables: Object;
  processVariables: Object;
  processDefinitionId: string;
  delegationState: string;

  constructor(
    id: string,
    name: string,
    assignee: string,
    description: string,
    executionId: string,
    owner: string,
    processInstanceId: string,
    createTime: Date,
    taskDefinitionKey: string,
    dueDate: string,
    parentTaskId: string,
    tenantId: string,
    taskLocalVariables: string,
    processVariables: string,
    processDefinitionId: string,
    delegationState: string
  ) {}
}
