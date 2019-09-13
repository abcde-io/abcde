import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class WebhookService {
  generateChallengeResponse(crcToken: string, consumerSecret: string): string {
    return createHmac('sha256', consumerSecret)
      .update(crcToken)
      .digest('base64');
  }
}
