export class Deployment {
  getId: string;
  getName: string;
  getDeploymentTime: string;
  getCategory: string;
  getKey: string;
  getTenantId: string;

  constructor(getId: string, getName: string, getDeploymentTime: string, getCategory: string, getKey: string, getTenantId: string) {
    this.getId = getId;
    this.getName = getName;
    this.getDeploymentTime = getDeploymentTime;
    this.getCategory = getCategory;
    this.getKey = getKey;
    this.getTenantId = getTenantId;
  }
}
