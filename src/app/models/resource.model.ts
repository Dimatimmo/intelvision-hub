import { ResourceType } from './enumerations/resource-type.enum';

export interface ResourceModel {
  id?: string;
  title: string;
  description: string;
  // createAt: Date;
  // updateAt: Date;
  resourceType: ResourceType;
  link: string;
  linkTitle: string;
}
