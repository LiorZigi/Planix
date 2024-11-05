import { useEffect, useState } from 'react';
import NewEventModal from '../../../core/components/organisms/NewEventModal';
import { useFetchMock } from '../../../core/hooks/useFetchMock';
import { EventData } from '../../../models/EventData';
import { PlanixRoutes, PlanixScreenProps } from '../../../core/@planix/types';

export default function BarbicueModal({ navigation }: PlanixScreenProps<PlanixRoutes.Barbecue>) {
  const [essemntials, setEssentials] = useState<EventData>();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await useFetchMock('barbecueData');
        setEssentials(response);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <NewEventModal event="barbecue" data={essemntials} />;
};
