import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderSalutation'
})
export class GenderSalutationPipe implements PipeTransform {

  /* Logic for our custom pipe
  Note the inputs it is taking and the output it is returning based on the tenary operator conditions
  */
  transform(name: string, gender: string): string {
    const salutation = gender === 'male' ? 'Mr. ' : 'Ms. ';
    return salutation + name;
  }

}
