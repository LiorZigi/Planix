import { barbecueData } from '../../mocks/event-data/barbecue-data';

export function useFetchMock(data: any): Promise<any> | undefined {
  // Simulate fetching data from an API with 1 second delay
  switch (data) {
    case 'barbecueData':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(barbecueData);
        }, 1000);
      });
  }
}
