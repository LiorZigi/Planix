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
  PlanixStack: any;
  PlanixInner: any;
  ChooseProduct: any;
  CreateEvent: any;
  Discover: any;
  Profile: any;
  Account: any;
  Settings: any;
  Notifications: any;
  BottomTabs: any;
  AuthScreen: any;
  AuthStack: any;
  OnboardingStack: any;
  FirstOnboarding: any;
  SecondOnboarding: any;
  Email: any;
  SignUp: any;
  Barbecue: EventSetupParamList;
  Birthday: EventSetupParamList;
  Custom: EventSetupParamList;
  Camping: EventSetupParamList;
  BachelorParty: EventSetupParamList;
  Picnic: EventSetupParamList;
  NewEventSetupStackScreen: any;
  MembersListSetupScreen: any;
  ProductsListSetupScreen: any;
  Back: any;
};

export type EventSetupParamList = {
  eventType: string;
};

export enum PlanixRoutes {
  Planix = 'Planix',
  PlanixStack = 'PlanixStack',
  PlanixInner = 'PlanixInner',
  ChooseProduct = 'ChooseProduct',
  CreateEvent = 'CreateEvent',
  Discover = 'Discover',
  Profile = 'Profile',
  Account = 'Account',
  Settings = 'Settings',
  Notifications = 'Notifications',
  AuthScreen = 'AuthScreen',
  AuthStack = 'AuthStack',
  BottomTabs = 'BottomTabs',
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
  NewEventSetupStackScreen = 'NewEventSetupStackScreen',
  MembersListSetupScreen = 'MembersListSetupScreen',
  ProductsListSetupScreen = 'ProductsListSetupScreen',
  Back = 'Back',
}
