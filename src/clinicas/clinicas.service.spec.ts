import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { Clinica } from './schemas/clinica.schema';

@Injectable()
export class ClinicaService {
  constructor(
    @InjectModel(Clinica.name) private clinicaModel: Model<Clinica>,
  ) {}

  async create(createClinicaDto: CreateClinicaDto): Promise<Clinica> {
    const createdClinica = new this.clinicaModel(createClinicaDto);
    return createdClinica.save();
  }

  async findAll(): Promise<Clinica[]> {
    return this.clinicaModel.find().exec();
  }
}
