export type AgentListProps = {
  data: {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: string[];
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: {
      uuid: string;
      displayName: string;
      description: string;
      displayIcon: string;
      assetPath: string;
    };
    recruitmentData: {
      counterId: string;
      milestoneId: string;
      milestoneThreshold: string;
      useLevelVpCostOverride: boolean;
      levelVpCostOverride: string;
      startDate: string;
      endDate: string;
    };
    abilities: [
      {
        slot: string;
        displayName: string;
        description: string;
        displayIcon: string;
      }
    ];
  };
};
