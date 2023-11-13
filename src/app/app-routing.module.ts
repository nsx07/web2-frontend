import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SignupComponent } from "./pages/signup/signup.component";
import { FormDeactivateGuard } from "./guards/form-deactivate.guard";
import { LoginComponent } from "./pages/login/login.component";
import { AuthService } from "./services/auth-service.service";
import { HomeComponent } from "./pages/home/home.component";
import { InvoiceComponent } from "./crud/invoice/invoice.component";
import { InvoiceTableComponent } from "./crud/invoice-table/invoice-table.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  {
    path: "signup",
    component: SignupComponent,
    canDeactivate: [FormDeactivateGuard],
  },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "invoice", component: InvoiceTableComponent },
  { path: "dashboard", component: DashboardComponent },
  {
    path: "crud",
    loadChildren: () => import("./crud/crud.module").then((x) => x.CrudModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule],
})
export class AppRoutingModule {}
