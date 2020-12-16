export interface State {
  readonly url: string;
  readonly title: string;
  readonly prevState?: keyof States;
  readonly nextState?: keyof States;
}

export interface States {
  readonly home: State;
  readonly fields: State;
  readonly pastures: State;
  readonly grains: State;
  readonly vegetables: State;
  readonly sheeps: State;
  readonly boars: State;
  readonly cattles: State;
  readonly unusedSpaces: State;
  readonly fencedStables: State;
  readonly clayRooms: State;
  readonly stoneRooms: State;
  readonly familyMembers: State;
  readonly cards: State;
  readonly bonus: State;
  readonly beggarCards: State;
  readonly result: State;
}

const STATES: States = {
  home: { url: '/', title: 'New Game' },
  fields: {
    url: '/points/fields',
    title: 'Fields',
    prevState: 'home',
    nextState: 'pastures',
  },
  pastures: {
    url: '/points/pastures',
    title: 'Pastures',
    prevState: 'fields',
    nextState: 'grains',
  },
  grains: {
    url: '/points/grains',
    title: 'Grains',
    prevState: 'pastures',
    nextState: 'vegetables',
  },
  vegetables: {
    url: '/points/vegetables',
    title: 'Vegetables',
    prevState: 'grains',
    nextState: 'sheeps',
  },
  sheeps: {
    url: '/points/sheeps',
    title: 'Sheeps',
    prevState: 'vegetables',
    nextState: 'boars',
  },
  boars: {
    url: '/points/boars',
    title: 'Wild Boars',
    prevState: 'sheeps',
    nextState: 'cattles',
  },
  cattles: {
    url: '/points/cattles',
    title: 'Cattles',
    prevState: 'boars',
    nextState: 'unusedSpaces',
  },
  unusedSpaces: {
    url: '/points/unusedSpaces',
    title: 'Unused Spaces',
    prevState: 'cattles',
    nextState: 'fencedStables',
  },
  fencedStables: {
    url: '/points/fencedStables',
    title: 'Fenced Stables',
    prevState: 'unusedSpaces',
    nextState: 'clayRooms',
  },
  clayRooms: {
    url: '/points/clayRooms',
    title: 'Clay Rooms',
    prevState: 'fencedStables',
    nextState: 'stoneRooms',
  },
  stoneRooms: {
    url: '/points/stoneRooms',
    title: 'Stone Rooms',
    prevState: 'clayRooms',
    nextState: 'familyMembers',
  },
  familyMembers: {
    url: '/points/familyMembers',
    title: 'Family Members',
    prevState: 'stoneRooms',
    nextState: 'cards',
  },
  cards: {
    url: '/points/cards',
    title: 'Card Points',
    prevState: 'familyMembers',
    nextState: 'bonus',
  },
  bonus: {
    url: '/points/bonus',
    title: 'Bonus Points',
    prevState: 'cards',
    nextState: 'beggarCards',
  },
  beggarCards: {
    url: '/points/beggarCards',
    title: 'Beggar Cards',
    prevState: 'bonus',
    nextState: 'result',
  },
  result: {
    url: '/result',
    title: 'Result',
    prevState: 'beggarCards',
  },
};

export default STATES;
