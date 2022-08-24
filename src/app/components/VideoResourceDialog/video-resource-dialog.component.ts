import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityType } from 'src/app/models/enumerations/entity-type.enum';
import { ResourceModel } from 'src/app/models/resource.model';
import { VideoResourceModel } from 'src/app/models/video-resource.model';
import { ResourceService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-video-resource-dialog',
  templateUrl: 'video-resource-dialog.component.html',
})
export class VideoResourceDialogComponent {
  public videoResourceForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<VideoResourceDialogComponent>,
    public readonly resourceService: ResourceService,
    @Inject(MAT_DIALOG_DATA)
    public data: { videoResource: VideoResourceModel; entityType: EntityType }
  ) {
    this.videoResourceForm = new FormGroup({
      videoLink: new FormControl(this.data?.videoResource?.videoLink || ''),
    });
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submitDialog(): void {
    const currentLink = this.videoResourceForm.controls.videoLink
      .value as string;
    const body: VideoResourceModel = {
      videoLink: currentLink.replace('/watch?v=', '/embed/'),
      resourceType: this.data.entityType,
    };
    this.data?.videoResource?.id
      ? this.resourceService
          .updateResource(
            this.data.entityType,
            this.data.videoResource.id,
            body
          )
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
