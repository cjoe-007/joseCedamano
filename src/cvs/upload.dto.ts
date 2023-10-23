import { IsInt, IsNumber, IsString, IsIn, Length, IsDate } from 'class-validator';

export class UploadDTO {
  @IsInt()
  id: number;

  @IsNumber()
  balance: number;

  @IsString()
  @IsIn(['INTERNAL', 'PEOPLE', 'OPERATIONS'])
  account: string;

  @IsString()
  @Length(1, 500)
  description: string;

  @IsString()
  @IsIn(['PENDING', 'PROCESSED'])
  status: string;

  @IsDate()
  date: Date;
}
