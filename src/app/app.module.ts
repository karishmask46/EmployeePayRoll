import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstPAgeComponent } from './Components/first-page/first-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { PracticeComponent } from './practice/practice.component';
import { MatInputModule } from '@angular/material/input';
import { SecondPageComponent } from './Components/second-page/second-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './Components/icon/icon.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { EditComponent } from './Components/edit/edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DemoComponent } from './Components/demo/demo.component';
import { Demo2Component } from './Components/demo2/demo2.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPAgeComponent,
    PracticeComponent,
    SecondPageComponent,
    IconComponent,
    EditComponent,
    DemoComponent,
    Demo2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,MatNativeDateModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
