import {NgModule} from "@angular/core";
import {MlIconMod} from "../icon/mlIconMod";
import {MlButtonMod} from "../controls/button/mlButtonMod";
import {MlMenu, MlMenuItem} from "./mlMenu";
@NgModule({
imports: [MlIconMod, MlButtonMod],
declarations: [MlMenu, MlMenuItem],
exports: [MlMenu, MlMenuItem]
})
export class MlMenuMod{}