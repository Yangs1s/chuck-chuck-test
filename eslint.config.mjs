import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      // 사용하지 않는 변수 금지 (코드 지저분해지는 것 방지)
      "@typescript-eslint/no-unused-vars": ["error"],
      /* 2. 디버깅 코드 프로덕션 유입 방지 */
      // console.log가 배포 코드에 들어가는 건 아마추어 같음 (warn 또는 error)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      /* 3. React/Next.js 관련 */
      // useEffect 의존성 배열 누락 방지 (버그의 주범)
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]);

export default eslintConfig;
