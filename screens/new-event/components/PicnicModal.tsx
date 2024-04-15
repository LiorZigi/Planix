import NewEventModal from '../../../core/components/organisms/NewEventModal';

const PicnicModal = () => {
  const dummyData = [
    {
      column1: 'Data 1',
      column2: 'Data 2',
    },
    {
      column1: 'Data 3',
      column2: 'Data 4',
    },
    {
      column1: 'Data 5',
      column2: 'Data 6',
    },
  ];
  return <NewEventModal data={dummyData} />;
};

export default PicnicModal;
