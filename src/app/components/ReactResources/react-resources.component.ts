import { Component } from '@angular/core';

import { EntityType } from 'src/app/models/enumerations/entity-type.enum';

@Component({
  selector: 'app-react-resources',
  templateUrl: 'react-resources.component.html',
  styleUrls: ['./react-resources.component.scss'],
})
export class ReactResourcesComponent {
  public readonly entityType = EntityType;
}
