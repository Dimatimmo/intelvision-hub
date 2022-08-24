import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityType } from 'src/app/models/enumerations/entity-type.enum';
import { ResourceModel } from 'src/app/models/resource.model';
import { ResourceService } from 'src/app/services/resources.service';
import { ResourceDialogComponent } from '../ResourceDialog/resource-dialog.component';

@Component({
  selector: 'app-resource-table',
  templateUrl: 'resource-table.component.html',
  styleUrls: ['./resource-table.component.scss'],
})
export class ResourceTableComponent implements OnInit {
  @Input() public entityType!: EntityType;
  public resources$: Observable<Array<ResourceModel>> = of([]);
  displayedColumns: string[] = ['title', 'description', 'link', 'delete'];
  constructor(
    private readonly resourceService: ResourceService,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.resources$ = this.resourceService
      .getAllResources(this.entityType)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.key,
            ...c.payload.val(),
          }))
        )
      );
  }

  public openDialog(): void {
    this.dialog.open(ResourceDialogComponent, {
      data: { resource: null, entityType: this.entityType },
    });
  }

  public removeResource(id: string): void {
    this.resourceService.deleteResource(this.entityType, id);
  }

  public editResource(resource: ResourceModel): void {
    this.dialog.open(ResourceDialogComponent, {
      data: { resource, entityType: this.entityType },
    });
  }
}
