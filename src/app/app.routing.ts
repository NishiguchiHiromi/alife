import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FieldComponent } from './component/field/field.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FieldComponent
    }]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);