import { String2 } from '../../lib/core';
import { Semantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface DeclarationSemantic extends Semantic {
  name: String2;
  usages: UsageSemantic[];
}
