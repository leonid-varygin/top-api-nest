import { IsString } from "class-validator";
import { UsePipes, ValidationPipe } from "@nestjs/common";

export class AuthDto {
  @IsString()
  login: string

  @IsString()
  password: string
}