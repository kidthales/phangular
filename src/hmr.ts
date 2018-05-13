import { NgModuleRef, ApplicationRef } from '@angular/core';

import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  let ngModule: NgModuleRef<any>;

  module.hot.accept();

  bootstrap().then(mod => {
    ngModule = mod;

    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);

    const data = module.hot.data;

    if (data) {
      if ('restoreInputValues' in data) {
        data.restoreInputValues();
      }

      appRef.tick();
    }
  });

  module.hot.dispose((data) => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);

    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);

    data.restoreInputValues = createInputTransfer();

    removeNgStyles();
    ngModule.destroy();
    makeVisible();
  });
};
