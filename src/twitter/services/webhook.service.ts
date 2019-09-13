import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';
import { TwitterResponseToken } from '../interfaces/twitter-response-token.interface';

@Injectable()
export class WebhookService {
  generateChallengeResponse(
    crcToken: string,
    consumerSecret: string,
  ): TwitterResponseToken {
    return {
      response_token: createHmac('sha256', consumerSecret)
        .update(crcToken)
        .digest('base64'),
    };
  }
}
