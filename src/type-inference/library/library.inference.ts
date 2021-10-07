import { Dependency, dependencyProvider } from '../../provider/find-type-member';
import { ImportMemberTree } from '../../tree/import/import-member.tree';
import { ImportTree } from '../../tree/import/import.tree';
import { getDefinitionInference } from '../definition/definition-inference.helper';
import { getFunctionInference } from '../function/function-inference.helper';
import { GenericsMap } from '../generics-map';
import { addToScope } from '../id-scope';
import { StatementInference } from '../statement/statement.inference';

export class LibraryInference extends StatementInference {
  public scope: string;

  public name: string;

  public members: ImportMemberTree[];

  public dependency: Dependency;

  public constructor(public tree: ImportTree, public genericsMap: GenericsMap) {
    super();

    this.name = tree.name;
    this.scope = tree.scope;
    this.members = tree.members;
    this.dependency = dependencyProvider.get(this.name, this.scope);

    tree.members.forEach((x) => {
      if (x.name.startsWith(x.name[0].toLowerCase())) {
        const { type } = getFunctionInference(this.dependency.findFunction(x.name), genericsMap);
        addToScope(x.alias || x.name, type);
      } else {
        const { type } = getDefinitionInference(
          this.dependency.findDefinition(x.name),
          genericsMap,
        );
        addToScope(x.alias || x.name, type);
      }
    });
  }
}
