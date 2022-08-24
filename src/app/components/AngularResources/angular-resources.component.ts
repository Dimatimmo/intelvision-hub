import { Component } from '@angular/core';
import { EntityType } from 'src/app/models/enumerations/entity-type.enum';

@Component({
  selector: 'app-angular-resources',
  templateUrl: 'angular-resources.component.html',
  styleUrls: ['./angular-resources.component.scss'],
})
export class AngularResourcesComponent {
  public readonly entityType = EntityType;
}
