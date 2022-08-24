import { Component } from '@angular/core';

import { EntityType } from 'src/app/models/enumerations/entity-type.enum';

@Component({
  selector: 'app-dot-net-resources',
  templateUrl: 'dot-net-resources.component.html',
  styleUrls: ['./dot-net-resources.component.scss'],
})
export class DotNetResourcesComponent {
  public readonly entityType = EntityType;
}
