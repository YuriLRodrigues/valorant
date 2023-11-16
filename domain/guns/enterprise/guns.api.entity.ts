interface GunsApiSkinsEntity {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string;
  assetPath: string;
  chromas: Array<{
    uuid: string;
    displayName: string;
    displayIcon: string;
    fullRender: string;
    swatch: string;
    streamedVideo: string;
    assetPath: string;
  }>;
  levels: Array<{
    uuid: string;
    displayName: string;
    levelItem: string;
    displayIcon: string;
    streamedVideo: string;
    assetPath: string;
  }>;
}

export interface GunsApiEntity {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: string;
    magazineSize: string;
    runSpeedMultiplier: string;
    equipTimeSeconds: string;
    reloadTimeSeconds: string;
    firstBulletAccuracy: string;
    shotgunPelletCount: string;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
  };
  shopData: {
    cost: string;
    category: string;
    categoryText: string;
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
  };
  skins: Array<GunsApiSkinsEntity>;
}
