import { Integer } from '~/lib/core';
import { NodeType } from './node-type';

export interface Node {
  readonly $: NodeType;
  start: Integer;
  stop: Integer;
  // row: Integer;
  // column: Integer;
}
