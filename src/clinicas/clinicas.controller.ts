import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { Clinica } from './entities/clinica.entity';
import { ClinicaService } from './clinicas.service';

@Controller('clinicas')
export class ClinicaController {
  constructor(private readonly clinicaService: ClinicaService) {}

  @Post()
  create(@Body() createClinicaDto: CreateClinicaDto): Clinica {
    return this.clinicaService.create(createClinicaDto);
  }

  @Get()
  findAll(): Clinica[] {
    return this.clinicaService.findAll();
  }
}
