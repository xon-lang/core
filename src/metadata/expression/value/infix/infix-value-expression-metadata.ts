import { Any, Unknown } from '../../../../lib/core';
import { InfixExpressionTree } from '../../../../tree/expression/infix/infix-expression-tree';
import { DeclarationScope } from '../../../declaration/scope/declaration-scope';
import { ValueExpressionMetadata } from '../value-expression-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';

export class InfixValueExpressionMetadata extends ValueExpressionMetadata {
  constructor(private tree: InfixExpressionTree, private scope: DeclarationScope) {
    super();
    tree.left.metadata = getValueExpressionMetadata(tree.left, scope);
    tree.right.metadata = getValueExpressionMetadata(tree.right, scope);
  }

  declaration(): DeclarationScope {
    throw new Error('Not implemented');
    // const left = getExpressionMetadata(this.tree.left, this.scope);
    // const right = getExpressionMetadata(this.tree.right, this.scope);
    // const attributes = left
    //   .attributes()
    //   .filter((x) => x.name === this.tree.name.text && x.type().is(right));
    // if (attributes.length > 1) throw new Error('To many attributes');
    // if (attributes.length === 0) throw new Error('Not found');
    // return attributes[0].type().attributes();
  }

  eval(): Any {
    // const left = this.tree.left.metadata.eval();
    // const right = this.tree.right.metadata.eval();
    // if (this.tree.name.text === '^') {
    //   return Math.pow(left, right);
    // }

    // const escapeIfString = (s: Unknown) => (typeof s === 'string' && `\`${s}\``) || s;
    // return eval(`${escapeIfString(left)} ${this.tree.name} ${escapeIfString(right)}`);
  }
}
