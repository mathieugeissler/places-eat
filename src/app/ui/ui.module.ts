import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdlModule} from '@angular-mdl/core';
import {MdlSelectModule} from '@angular-mdl/select';
import {MdlDatePickerModule} from '@angular-mdl/datepicker';

@NgModule({
  imports: [
    CommonModule,
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule
  ],
  declarations: [],
  exports: [
    MdlModule,
    MdlSelectModule,
    MdlDatePickerModule
  ]
})
export class UiModule {
}
