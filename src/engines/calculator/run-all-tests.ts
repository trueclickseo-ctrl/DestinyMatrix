import { runLifePathUnitTests } from './life-path/tests';
import { runDestinyMatrixUnitTests } from './destiny-matrix/tests';
import { runNameNumerologyUnitTests } from './name/tests';
import { runPersonalYearUnitTests } from './personal-year/tests';
import { runCompatibilityUnitTests } from './compatibility/tests';
import { runEssenceUnitTests } from './essence/tests';

export function runMasterCalculationTestSuite() {
  const lp = runLifePathUnitTests();
  const dm = runDestinyMatrixUnitTests();
  const nm = runNameNumerologyUnitTests();
  const py = runPersonalYearUnitTests();
  const cm = runCompatibilityUnitTests();
  const es = runEssenceUnitTests();

  const totalPassed = lp.passed + dm.passed + nm.passed + py.passed + cm.passed + es.passed;
  const totalFailed = lp.failed + dm.failed + nm.failed + py.failed + cm.failed + es.failed;
  const allErrors = [...lp.errors, ...dm.errors, ...nm.errors, ...py.errors, ...cm.errors, ...es.errors];

  return {
    passed: totalPassed,
    failed: totalFailed,
    errors: allErrors,
    details: {
      lifePath: lp,
      destinyMatrix: dm,
      nameNumerology: nm,
      personalYear: py,
      compatibility: cm,
      essence: es,
    },
  };
}
