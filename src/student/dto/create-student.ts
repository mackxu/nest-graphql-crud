import { CreateStudentInput } from 'src/auto.graphql';
import { MaxLength, Max, Min } from 'class-validator';

export class CreateStudentDto extends CreateStudentInput {
  @MaxLength(10, {
    message: 'Name is too long',
  })
  name: string;
  sex: boolean;
  @Max(30)
  @Min(15)
  age?: number;
}
