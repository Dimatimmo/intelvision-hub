import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { EntityType } from '../models/enumerations/entity-type.enum';
import { ResourceModel } from '../models/resource.model';
import { VideoResourceModel } from '../models/video-resource.model';

@Injectable({ providedIn: 'root' })
export class ResourceService {
  constructor(private readonly fireService: AngularFireDatabase) {}

  public addResource(
    entityType: EntityType,
    resource: ResourceModel | VideoResourceModel
  ): Observable<any> {
    return of(this.fireService.list(entityType).push(resource));
  }

  public getAllResources(entityType: EntityType): AngularFireList<any> {
    return this.fireService.list(entityType);
  }

  deleteResource(entityType: EntityType, id: string): Observable<any> {
    return of(this.fireService.list(entityType).remove(id));
  }

  updateResource(
    entityType: EntityType,
    id: string,
    resource: ResourceModel | VideoResourceModel
  ) {
    return of(this.fireService.list(entityType).update(id, resource));
  }
}
