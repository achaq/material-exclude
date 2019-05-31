import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialexcludeSharedLibsModule, MaterialexcludeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MaterialexcludeSharedLibsModule, MaterialexcludeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MaterialexcludeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialexcludeSharedModule {
  static forRoot() {
    return {
      ngModule: MaterialexcludeSharedModule
    };
  }
}
