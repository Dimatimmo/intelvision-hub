import { EntityType } from './enumerations/entity-type.enum';

export interface VideoResourceModel {
  id?: string;
  videoLink: string;
  resourceType: EntityType;
}
