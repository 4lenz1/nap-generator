import LayoutWrapper from '../components/LayoutWrapper';
import QuotationHeaderForm from '../components/QuotationHeaderForm';
import QuotationItemTable from '../components/QuotationItemTable';
import SummarySection from '../components/SummarySection';
import QuotationPreview from '../components/QuotationPreview';

export default function Page() {
  return (
    <LayoutWrapper>
      <QuotationHeaderForm />
      <QuotationItemTable />
      {/* SummarySection expects subtotal prop; placeholder 0 for now */}
      <SummarySection subtotal={0} />
      <QuotationPreview />
    </LayoutWrapper>
  );
}
