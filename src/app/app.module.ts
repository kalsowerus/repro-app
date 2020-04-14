import { NgModule } from '@angular/core';
import { TestModule } from './test/test.module';

@NgModule({
  imports: [
    TestModule
  ],
  exports: [
    TestModule
  ]
})
export class AppModule {}
