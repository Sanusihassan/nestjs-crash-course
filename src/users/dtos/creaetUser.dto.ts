import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class createUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    id: number;
    @IsEmail()
    email: string;
}