import { Any, Boolean } from '../../lib/core';
import { Metadata } from '../metadata';
import { TypeMetadata } from '../type/type-metadata';

export abstract class ValueMetadata extends Metadata {
  type(): TypeMetadata {
    throw new Error('Not implemented');
  }
  is(metadata: TypeMetadata): Boolean {
    throw new Error('Not implemented');
  }
  eval(): Any {
    throw new Error('Not implemented');
  }
}