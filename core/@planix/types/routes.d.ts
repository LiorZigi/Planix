export type PlanixParamList = {
  Planix: {
    groupName: string;
    members: number;
    notifyMembers: boolean;
    data: Array<{
      isChecked: boolean;
      product: string | number;
      amount: string | number;
    }>;
  };
  CreateEvent: undefined;
  Discover: undefined;
  Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
  AuthScreen: undefined;
  OnboardingStack: undefined;
  FirstOnboarding: undefined;
  SecondOnboarding: undefined;
  Email: undefined;
  SignUp: undefined;
  Barbecue: undefined;
  Birthday: undefined;
  Custom: undefined;
  Camping: undefined;
  BachelorParty: undefined;
  Picnic: undefined;
};

export enum PlanixRoutes {
  Planix = 'Planix',
  CreateEvent = 'CreateEvent',
  Discover = 'Discover',
  Profile = 'Profile',
  Settings = 'Settings',
  Notifications = 'Notifications',
  AuthScreen = 'AuthScreen',
  OnboardingStack = 'OnboardingStack',
  FirstOnboarding = 'FirstOnboarding',
  SecondOnboarding = 'SecondOnboarding',
  Email = 'Email',
  SignUp = 'SignUp',
  Barbecue = 'Barbecue',
  Birthday = 'Birthday',
  Custom = 'Custom',
  Camping = 'Camping',
  BachelorParty = 'BachelorParty',
  Picnic = 'Picnic',
}
