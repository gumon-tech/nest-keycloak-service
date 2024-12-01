import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GumonsModule } from './gumons/gumons.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    // common
    CommonModule,

    GumonsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
