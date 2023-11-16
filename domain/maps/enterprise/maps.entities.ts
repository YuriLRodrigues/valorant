export interface MapsEntity {
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
}
