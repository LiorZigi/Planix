import { PlanixRoutes, PlanixScreenProps } from '../../../core/@planix/types';
import NewEventModal from '../../../core/components/organisms/NewEventModal';

export default function BirthdayModal({ navigation }: PlanixScreenProps<PlanixRoutes.Birthday>) {
  const dummyData = [
    {
      isChecked: false,
      product: 'Data 1',
      amount: 2,
    },
    {
      isChecked: true,
      product: 'Data 3',
      amount: 4,
    },
    {
      isChecked: false,
      product: 'Data 5',
      amount: 6,
    },
  ];
  return <NewEventModal event='Birthday' data={dummyData} />;
};
