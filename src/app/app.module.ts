import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

// Components
import { HomePageComponent } from './components/HomePage/home-page.component';
import { NotFoundPageComponent } from './components/NotFound/not-found-page.component';
import { AngularResourcesComponent } from './components/AngularResources/angular-resources.component';
import { ReactResourcesComponent } from './components/ReactResources/react-resources.component';
import { DotNetResourcesComponent } from './components/DotNetResources/dot-net-resources.component';
import { ResourceTableComponent } from './components/ResourceTable/resource-table.component';
import { ResourceDialogComponent } from './components/ResourceDialog/resource-dialog.component';
import { ResourceVideoListComponent } from './components/ResourceVideoList/resource-video-list.component';
import { VideoResourceDialogComponent } from './components/VideoResourceDialog/video-resource-dialog.component';
import { VerifyEmailPageComponent } from './components/VerifyEmailPage/verify-email-page.component';

//firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//Services
import { ResourceService } from './services/resources.service';

//Additional
import { environment } from '../environments/environment';
import { SafePipe } from './pipes/safe.pipe';
import { AuthGuard } from './components/guards/auth.guard';
import { EmailGuard } from './components/guards/email.guard';
import { NodeResourcesComponent } from './components/NodeResources/node-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ResourceTableComponent,
    AngularResourcesComponent,
    ReactResourcesComponent,
    DotNetResourcesComponent,
    ResourceDialogComponent,
    ResourceVideoListComponent,
    VideoResourceDialogComponent,
    VerifyEmailPageComponent,
    SafePipe,
    NodeResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [ResourceService, AuthGuard, EmailGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
