import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateClinicaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  rua: string;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  numero_residencial: string;

  @IsString()
  @IsNotEmpty()
  contato_telefonico: string;

  @IsString()
  @IsNotEmpty()
  texto_bio: string;

  @IsArray()
  @ArrayNotEmpty()
  lista_de_marcacoes: string[];
}
