import { circularDependency } from "./circularDependency";
import { crossReference } from "./crossReference";
import { gqlObjects, gqlOperationName } from "./gqlRules";
import { noRenamedTranslationImport } from "./noRenamedTranslationImport";
import { oneTranslationImport } from "./oneTranslationImport";

const rules = {
  "one-translation-import-per-file": oneTranslationImport,
  "no-renamed-translation-import": noRenamedTranslationImport,
  "gql-objects": gqlObjects,
  "gql-operation-name": gqlOperationName,
  "cross-reference": crossReference,
  "circular-dependency": circularDependency,
};

export { rules };
