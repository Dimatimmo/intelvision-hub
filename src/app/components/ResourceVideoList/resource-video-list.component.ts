import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityType } from 'src/app/models/enumerations/entity-type.enum';
import { VideoResourceModel } from 'src/app/models/video-resource.model';
import { ResourceService } from 'src/app/services/resources.service';
import { VideoResourceDialogComponent } from '../VideoResourceDialog/video-resource-dialog.component';

@Component({
  selector: 'app-resource-video-list',
  templateUrl: 'resource-video-list.component.html',
  styleUrls: ['./resource-video-list.component.scss'],
})
export class ResourceVideoListComponent implements OnInit {
  @Input() public entityType!: EntityType;
  public videoResources$: Observable<Array<VideoResourceModel>> = of([]);
  displayedColumns: string[] = ['title', 'description', 'link', 'delete'];
  constructor(
    private readonly resourceService: ResourceService,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.videoResources$ = this.resourceService
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
    this.dialog.open(VideoResourceDialogComponent, {
      data: { resource: null, entityType: this.entityType },
    });
  }

  public removeVideoResource(id: string): void {
    this.resourceService.deleteResource(this.entityType, id);
  }

  public editVideoResource(videoResource: VideoResourceModel): void {
    this.dialog.open(VideoResourceDialogComponent, {
      data: { videoResource, entityType: this.entityType },
    });
  }
}
