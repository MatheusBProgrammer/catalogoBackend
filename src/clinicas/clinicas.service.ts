import { Injectable } from '@nestjs/common';
import { Clinica } from './entities/clinica.entity';
import { CreateClinicaDto } from './dto/create-clinica.dto';

@Injectable()
export class ClinicaService {
  private clinicas: Clinica[] = [];
  private idCounter = 1;

  create(createClinicaDto: CreateClinicaDto): Clinica {
    const newClinica: Clinica = {
      id: this.idCounter++,
      ...createClinicaDto,
    };
    this.clinicas.push(newClinica);
    return newClinica;
  }

  findAll(): Clinica[] {
    return this.clinicas;
  }
}
