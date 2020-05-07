import { MigrationInterface, QueryRunner } from "typeorm";
import { UserSeed } from '../seeds/user.seed';


export class UsersMigration1588878233535 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await getRepository("user").save(UserSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
