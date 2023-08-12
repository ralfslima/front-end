import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformar'
})
export class TransformarPipe implements PipeTransform {

  transform(media:number): string {
    return media >= 7 ? `Aprovado(a) com média ${media}` : `Reprovado(a) com média ${media}`;
  }

}
