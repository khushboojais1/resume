import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app.routing";
import { MaterialModule } from "src/material";
import { MyresumeComponent } from './myresume/myresume.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExperienceDialogComponent } from './popup/experience-dialog/experience-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { ContactMeComponent } from './popup/contact-me/contact-me.component';
@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    MatDialogModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MyresumeComponent,
    ExperienceDialogComponent,
    ContactMeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
