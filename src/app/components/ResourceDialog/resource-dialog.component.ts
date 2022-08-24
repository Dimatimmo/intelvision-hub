import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityType } from 'src/app/models/enumerations/entity-type.enum';
import { ResourceModel } from 'src/app/models/resource.model';
import { ResourceService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resource-dialog',
  templateUrl: 'resource-dialog.component.html',
})
export class ResourceDialogComponent {
  public resourceForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ResourceDialogComponent>,
    public readonly resourceService: ResourceService,
    @Inject(MAT_DIALOG_DATA)
    public data: { resource: ResourceModel; entityType: EntityType }
  ) {
    this.resourceForm = new FormGroup({
      title: new FormControl(this.data?.resource?.title || ''),
      description: new FormControl(this.data?.resource?.description || ''),
      linkTitle: new FormControl(this.data?.resource?.link || ''),
      link: new FormControl(this.data?.resource?.link || ''),
    });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submitDialog(): void {
    const body: ResourceModel = {
      ...this.resourceForm.value,
      resourceType: this.data.entityType,
    };
    this.data?.resource?.id
      ? this.resourceService
          .updateResource(this.data.entityType, this.data.resource.id, body)
          .subscribe(() => {
            this.closeDialog();
          })
      : this.resourceService
          .addResource(this.data.entityType, body)
          .subscribe(() => {
            this.closeDialog();
          });
  }
}
