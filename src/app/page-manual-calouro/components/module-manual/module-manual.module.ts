import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualSobreFctComponent } from './../manual-sobre-fct/manual-sobre-fct.component';
import { ManualIntroducaoComponent } from './../manual-introducao/manual-introducao.component';
import { ManualEntidadesComponent } from './../manual-entidades/manual-entidades.component';
import { ManualCursosComponent } from './../manual-cursos/manual-cursos.component';
import { ManualAuxiliosComponent } from './../manual-auxilios/manual-auxilios.component';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    ManualAuxiliosComponent,
    ManualCursosComponent,
    ManualEntidadesComponent,
    ManualIntroducaoComponent,
    ManualSobreFctComponent,
  ],
  imports: [CommonModule, MarkdownModule.forChild()],
  exports: [
    ManualAuxiliosComponent,
    ManualCursosComponent,
    ManualEntidadesComponent,
    ManualIntroducaoComponent,
    ManualSobreFctComponent,
  ],
})
export class ModuleManualModule {}
