import { Module } from '@nestjs/common';
import { ClinicaController } from './clinicas.controller';
import { ClinicaService } from './clinicas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Clinica } from './entities/clinica.entity';
import { ClinicaSchema } from './schemas/clinica.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clinica.name, schema: ClinicaSchema }]),
  ],

  controllers: [ClinicaController],
  providers: [ClinicaService],
})
export class ClinicaModule {}
