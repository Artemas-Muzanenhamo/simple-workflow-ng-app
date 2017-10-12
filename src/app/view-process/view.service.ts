import {Injectable} from '@angular/core';
import {Task} from '../domain/task';

@Injectable()
export class ViewService {

  getProcesses(): Task[] {
    return [
      {
        'id': '12506',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '12503',
        'owner': null,
        'processInstanceId': '12501',
        'createTime': 1507045418926,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:2:2504',
        'delegationState': null
      },
      {
        'id': '17',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '14',
        'owner': null,
        'processInstanceId': '12',
        'createTime': 1507040878096,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:1:4',
        'delegationState': null
      },
      {
        'id': '20017',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20014',
        'owner': null,
        'processInstanceId': '20012',
        'createTime': 1507117307731,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20024',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20021',
        'owner': null,
        'processInstanceId': '20019',
        'createTime': 1507117308147,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20031',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20028',
        'owner': null,
        'processInstanceId': '20026',
        'createTime': 1507117308341,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20038',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20035',
        'owner': null,
        'processInstanceId': '20033',
        'createTime': 1507117308515,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20045',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20042',
        'owner': null,
        'processInstanceId': '20040',
        'createTime': 1507117308660,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20052',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20049',
        'owner': null,
        'processInstanceId': '20047',
        'createTime': 1507117308798,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20059',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20056',
        'owner': null,
        'processInstanceId': '20054',
        'createTime': 1507117308938,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20066',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20063',
        'owner': null,
        'processInstanceId': '20061',
        'createTime': 1507117309089,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20073',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20070',
        'owner': null,
        'processInstanceId': '20068',
        'createTime': 1507117309315,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20080',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20077',
        'owner': null,
        'processInstanceId': '20075',
        'createTime': 1507117309472,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20087',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20084',
        'owner': null,
        'processInstanceId': '20082',
        'createTime': 1507117309656,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20094',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20091',
        'owner': null,
        'processInstanceId': '20089',
        'createTime': 1507117309791,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20101',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20098',
        'owner': null,
        'processInstanceId': '20096',
        'createTime': 1507117309922,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20108',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20105',
        'owner': null,
        'processInstanceId': '20103',
        'createTime': 1507117310122,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20115',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20112',
        'owner': null,
        'processInstanceId': '20110',
        'createTime': 1507117310322,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20122',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20119',
        'owner': null,
        'processInstanceId': '20117',
        'createTime': 1507117310697,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20129',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20126',
        'owner': null,
        'processInstanceId': '20124',
        'createTime': 1507117310849,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '20136',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '20133',
        'owner': null,
        'processInstanceId': '20131',
        'createTime': 1507117310970,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:5:20004',
        'delegationState': null
      },
      {
        'id': '24',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '21',
        'owner': null,
        'processInstanceId': '19',
        'createTime': 1507040878877,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:1:4',
        'delegationState': null
      },
      {
        'id': '2510',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '2507',
        'owner': null,
        'processInstanceId': '2505',
        'createTime': 1507043809036,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:2:2504',
        'delegationState': null
      },
      {
        'id': '31',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '28',
        'owner': null,
        'processInstanceId': '26',
        'createTime': 1507040879527,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:1:4',
        'delegationState': null
      },
      {
        'id': '38',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '35',
        'owner': null,
        'processInstanceId': '33',
        'createTime': 1507040882702,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:1:4',
        'delegationState': null
      },
      {
        'id': '45',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '42',
        'owner': null,
        'processInstanceId': '40',
        'createTime': 1507040882840,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:1:4',
        'delegationState': null
      },
      {
        'id': '5006',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '5003',
        'owner': null,
        'processInstanceId': '5001',
        'createTime': 1507045114665,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:2:2504',
        'delegationState': null
      },
      {
        'id': '7506',
        'name': 'my-task',
        'assignee': 'artemas',
        'description': null,
        'executionId': '7503',
        'owner': null,
        'processInstanceId': '7501',
        'createTime': 1507045324549,
        'taskDefinitionKey': 'usertask1',
        'dueDate': null,
        'parentTaskId': null,
        'tenantId': '',
        'taskLocalVariables': {},
        'processVariables': {},
        'processDefinitionId': 'my-process:2:2504',
        'delegationState': null
      }
    ];
  }

}
