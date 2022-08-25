import { Component } from '@angular/core';
import { EntityType } from 'src/app/models/enumerations/entity-type.enum';

@Component({
  selector: 'app-node-resources',
  templateUrl: 'node-resources.component.html',
  styleUrls: ['./node-resources.component.scss'],
})
export class NodeResourcesComponent {
  public readonly entityType = EntityType;
}
