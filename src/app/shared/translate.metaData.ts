import { httpLoaderFactory } from "./translate.factory";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";

const translateMetaData = {
    defaultLanguage: 'english',
    loader:
    {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
    }
}

export default translateMetaData;