export type MapsListProps = {
  data: Array<{
    uuid: string;
    displayName: string;
    narrativeDescription: string;
    tacticalDescription: string;
    coordinates: string;
    displayIcon: string;
    listViewIcon: string;
    splash: string;
    assetPath: string;
    mapUrl: string;
    xMultiplier: string;
    yMultiplier: string;
    xScalarToAdd: string;
    yScalarToAdd: string;
    callouts: [
      {
        regionName: string;
        superRegionName: string;
        location: [
          {
            x: string;
            y: string;
          }
        ];
      }
    ];
  }>;
};
