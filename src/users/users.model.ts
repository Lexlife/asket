import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
	email: string;
	password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({ example: 1, description: 'Unique identifier' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@ApiProperty({ example: 'user@mail.com', description: 'Email' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string;

	@ApiProperty({ example: '5f2T~rE', description: 'Password' })
	@Column({ type: DataType.STRING, allowNull: false })
	password: string;

	@ApiProperty({ example: 'true', description: 'Banned or not' })
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	banned: boolean;

	@ApiProperty({ example: 'For hooliganism', description: 'Reason for blocking' })
	@Column({ type: DataType.STRING, allowNull: true })
	banReason: string;
}