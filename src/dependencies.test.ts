/// <reference types="node" />

import path from "node:path";
import { ESLint } from "eslint";
import * as parser from "@typescript-eslint/parser";
import { expect, test } from "vitest";

test("TypeScript parser resolves project globs with the patched minimatch dependency", () => {
  const result = parser.parseForESLint("export const count: number = 1;", {
    filePath: path.resolve("src/App.tsx"),
    project: ["./tsconfig*.json"],
    tsconfigRootDir: process.cwd(),
    // CI=true otherwise switches the parser to single-run mode, which parses
    // src/App.tsx from disk instead of the code passed above.
    disallowAutomaticSingleRunInference: true,
  });

  expect(result.ast.body[0].type).toBe("ExportNamedDeclaration");
  expect(result.services.program).toBeDefined();
});

test("ESLint and the TypeScript parser still handle TSX file globs", async () => {
  // Isolate dependency compatibility from the repository's legacy lint config.
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [
      {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {
          parser,
          parserOptions: { ecmaFeatures: { jsx: true } },
        },
        rules: { "no-unused-vars": "error" },
      },
    ],
  });

  const [valid] = await eslint.lintText(
    "const count: number = 1; export default () => <p>{count}</p>;",
    { filePath: "src/dependency-fixture.tsx" },
  );
  expect(valid.messages).toEqual([]);

  const [unused] = await eslint.lintText("const unused: number = 1;", {
    filePath: "src/dependency-fixture.tsx",
  });
  expect(unused.messages).toEqual([
    expect.objectContaining({ ruleId: "no-unused-vars", severity: 2 }),
  ]);
});
