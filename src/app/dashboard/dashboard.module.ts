import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from '../layout/layout.module';
import {Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupsComponent } from './groups/groups.component';
import {MatFormFieldModule, MatInputModule,
  MatAutocompleteModule, MatButtonModule,
   MatProgressSpinnerModule} from '@angular/material';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { ClusterComponent } from './cluster/cluster.component';
import { ClusterDetailComponent } from './cluster-detail/cluster-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [DashboardComponent,
     GroupsComponent, 
     GroupDetailsComponent,
     ClusterComponent,
     ClusterDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
     ReactiveFormsModule,
     MatProgressSpinnerModule,
    DashboardRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class DashboardModule {
   
 }
