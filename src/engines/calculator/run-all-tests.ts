import { runLifePathUnitTests } from './life-path/tests';
import { runDestinyMatrixUnitTests } from './destiny-matrix/tests';
import { runNameNumerologyUnitTests } from './name/tests';
import { runPersonalYearUnitTests } from './personal-year/tests';
import { runCompatibilityUnitTests } from './compatibility/tests';

export function runMasterCalculationTestSuite() {
  const lp = runLifePathUnitTests();
  const dm = runDestinyMatrixUnitTests();
  const nm = runNameNumerologyUnitTests();
  const py = runPersonalYearUnitTests();
  const cm = runCompatibilityUnitTests();

  const totalPassed = lp.passed + dm.passed + nm.passed + py.passed + cm.passed;
  const totalFailed = lp.failed + dm.failed + nm.failed + py.failed + cm.failed;
  const allErrors = [...lp.errors, ...dm.errors, ...nm.errors, ...py.errors, ...cm.errors];

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
    },
  };
}
