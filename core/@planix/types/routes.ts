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
  CreateEvent: any;
  Discover: any;
  Profile: any;
  Account: any;
  Settings: any;
  Notifications: any;
  AuthScreen: any;
  AuthStack: any;
  OnboardingStack: any;
  FirstOnboarding: any;
  SecondOnboarding: any;
  Email: any;
  SignUp: any;
  Barbecue: any;
  Birthday: any;
  Custom: any;
  Camping: any;
  BachelorParty: any;
  Picnic: any;
  Back: any;
};

export enum PlanixRoutes {
  Planix = 'Planix',
  CreateEvent = 'CreateEvent',
  Discover = 'Discover',
  Profile = 'Profile',
  Account = 'Account',
  Settings = 'Settings',
  Notifications = 'Notifications',
  AuthScreen = 'AuthScreen',
  AuthStack = 'AuthStack',
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
  Back = 'Back',
}
