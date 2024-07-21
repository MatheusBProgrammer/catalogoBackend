import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Clinica extends Document {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  cidade: string;

  @Prop({ required: true })
  rua: string;

  @Prop({ required: true })
  bairro: string;

  @Prop({ required: true })
  numero_residencial: string;

  @Prop({ required: true })
  contato_telefonico: string;

  @Prop({ required: true })
  texto_bio: string;

  @Prop({ type: [String], required: true })
  lista_de_marcacoes: string[];

  @Prop({ required: true })
  cpf: string; // Adicione o campo CPF aqui
}

export const ClinicaSchema = SchemaFactory.createForClass(Clinica);
