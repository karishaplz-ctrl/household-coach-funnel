import { FunnelProvider } from './funnel/FunnelContext';
import { StepRouter } from './funnel/StepRouter';

export default function Home() {
  return (
    <FunnelProvider>
      <StepRouter />
    </FunnelProvider>
  );
}
