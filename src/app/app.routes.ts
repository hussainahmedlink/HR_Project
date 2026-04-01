import { Routes } from '@angular/router';
import { Dashoard } from './features/dashoard/dashoard';
import { EmployeeList } from './features/employee-list/employee-list';
import { LeaveList } from './features/leave-list/leave-list';

export const routes: Routes = [
    {path:"",component:Dashoard},
    {path:"employees",component:EmployeeList},
    {path:"leaves",component:LeaveList}
];
