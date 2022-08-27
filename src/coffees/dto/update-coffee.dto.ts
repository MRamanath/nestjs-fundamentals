// export class UpdateCoffeeDto {
//   public readonly name?: string;
//   public readonly brand?: string;
//   public readonly flavors?: string[];
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
