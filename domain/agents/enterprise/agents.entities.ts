export interface AgentsEntity {
  uuid: string;
  displayName: string;
  description: string;
  characterTags: string[];
  displayIcon: string;
  displayIconSmall: string;
  fullPortraitV2: string;
  background: string;
  backgroundGradientColors: string[];
  isPlayableCharacter: boolean;
  abilities: [
    {
      slot: string;
      displayName: string;
      description: string;
      displayIcon: string;
    }
  ];
}
