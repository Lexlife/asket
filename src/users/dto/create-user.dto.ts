/* (DTO) Data Transfer Objects (объекты передачи данных) это объект, используемый для проверки данных и определения структуры данных. 
DTO похожи на интерфейсы, но отличаются от них:
1) Интерфейсы используются для проверки типов и определения структуры.
2) DTO используется для проверки типов, определения структуры и валидации данных.
3) Интерфейсы исчезают во время компиляции, поскольку они являются родными для TypeScript и не существуют в JavaScript.
4) DTO определяются с помощью классов, которые поддерживаются в родном JavaScript. Следовательно, они остаются после компиляции.
5) DTO могут выполнять только проверку типов и определение структур. Чтобы выполнить проверку данных с помощью DTO, необходимо использовать NestJS ValidationPipe.
*/
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: '5f2T~rE', description: 'Password' })
  readonly password: string;
}