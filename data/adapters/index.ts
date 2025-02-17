import sdk from '../sdk';

import { setup as setupEthereum } from './ethereum';
import { setup as setupArbitrum } from './arbitrum';
import { setup as setupOptimisim } from './optimisim';
// import { setup as setupAztec } from './aztec';
// import { setup as setupLoopring } from './loopring';
import { setup as setupZksync } from './zksync';
import { setup as setupHermez } from './hermez';

const feesList = sdk.getList('l2-fees');

feesList.addAdaptersWithSetupFunction(setupEthereum);
feesList.addAdaptersWithSetupFunction(setupArbitrum);
feesList.addAdaptersWithSetupFunction(setupOptimisim);
// feesList.addAdaptersWithSetupFunction(setupAztec);
// feesList.addAdaptersWithSetupFunction(setupLoopring);
feesList.addAdaptersWithSetupFunction(setupZksync);
feesList.addAdaptersWithSetupFunction(setupHermez);
