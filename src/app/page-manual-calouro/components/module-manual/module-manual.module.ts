import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualSobreFctComponent } from './../manual-sobre-fct/manual-sobre-fct.component';
import { ManualIntroducaoComponent } from './../manual-introducao/manual-introducao.component';
import { ManualEntidadesComponent } from './../manual-entidades/manual-entidades.component';
import { ManualCursosComponent } from './../manual-cursos/manual-cursos.component';
import { ManualAuxiliosComponent } from './../manual-auxilios/manual-auxilios.component';
import { ManualOperadorasComponent } from './../manual-operadoras/manual-operadoras.component';

import { MarkdownModule } from 'ngx-markdown';

import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ManualAuxiliosComponent,
    ManualCursosComponent,
    ManualEntidadesComponent,
    ManualIntroducaoComponent,
    ManualSobreFctComponent,
    ManualOperadorasComponent,
  ],
  imports: [CommonModule, MarkdownModule.forChild(), IonicModule],
  exports: [
    ManualAuxiliosComponent,
    ManualCursosComponent,
    ManualEntidadesComponent,
    ManualIntroducaoComponent,
    ManualSobreFctComponent,
    ManualOperadorasComponent,
  ],
})
export class ModuleManualModule {}
