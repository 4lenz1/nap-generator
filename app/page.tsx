import LayoutWrapper from '../components/LayoutWrapper';
import QuotationHeaderForm from '../components/QuotationHeaderForm';
import QuotationItemTable from '../components/QuotationItemTable';
import SummarySection from '../components/SummarySection';
import QuotationPreview from '../components/QuotationPreview';
import { QuotationProvider } from '../components/QuotationContext';

export default function Page() {
  return (
    <QuotationProvider>
      <LayoutWrapper>
        <QuotationHeaderForm />
        <QuotationItemTable />
        <SummarySection />
        <QuotationPreview />
      </LayoutWrapper>
    </QuotationProvider>
  );
}
