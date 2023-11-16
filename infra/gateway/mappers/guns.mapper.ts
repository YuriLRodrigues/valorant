import { GunsApiEntity } from "@/domain/guns/enterprise/guns.api.entity";
import { GunsEntity } from "@/domain/guns/enterprise/guns.entity";

export class GunsMapper {
  static toDomain(gunEntity: GunsApiEntity): GunsEntity {
    console.log(gunEntity.weaponStats);
    return {
      id: gunEntity.uuid,
      displayName: gunEntity.displayName,
      category: gunEntity.category,
      defaultSkinId: gunEntity.defaultSkinUuid,
      displayIcon: gunEntity.displayIcon,
      killStreamIcon: gunEntity.killStreamIcon,
      assetPath: gunEntity.assetPath,
      weaponStats: gunEntity.weaponStats && {
        fireRate: gunEntity.weaponStats.fireRate,
        magazineSize: gunEntity.weaponStats.magazineSize,
        runSpeedMultiplier: gunEntity.weaponStats.runSpeedMultiplier,
        equipTimeSeconds: gunEntity.weaponStats.equipTimeSeconds,
        reloadTimeSeconds: gunEntity.weaponStats.reloadTimeSeconds,
        firstBulletAccuracy: gunEntity.weaponStats.firstBulletAccuracy,
        shotgunPelletCount: gunEntity.weaponStats.shotgunPelletCount,
        wallPenetration: gunEntity.weaponStats.wallPenetration,
        feature: gunEntity.weaponStats.feature,
        fireMode: gunEntity.weaponStats.fireMode,
        altFireType: gunEntity.weaponStats.altFireType,
      },
      shopData: gunEntity.shopData && {
        cost: gunEntity.shopData.cost,
        category: gunEntity.shopData.category,
        categoryText: gunEntity.shopData.categoryText,
        canBeTrashed: gunEntity.shopData.canBeTrashed,
        image: gunEntity.shopData.image,
        newImage: gunEntity.shopData.newImage,
        newImage2: gunEntity.shopData.newImage2,
        assetPath: gunEntity.shopData.assetPath,
      },
      skins: gunEntity.skins.map((skin) => ({
        id: skin.uuid,
        displayName: skin.displayName,
        themeId: skin.themeUuid,
        contentTierId: skin.contentTierUuid,
        displayIcon: skin.displayIcon,
        wallpaper: skin.wallpaper,
        assetPath: skin.assetPath,
        chromas: skin.chromas.map((chr) => ({
          id: chr.uuid,
          displayName: chr.displayName,
          displayIcon: chr.displayIcon,
          fullRender: chr.fullRender,
          swatch: chr.swatch,
          streamedVideo: chr.streamedVideo,
          assetPath: chr.assetPath,
        })),
        levels: skin.levels.map((lvl) => ({
          id: lvl.uuid,
          displayName: lvl.displayName,
          displayIcon: lvl.displayIcon,
          levelItem: lvl.levelItem,
          streamedVideo: lvl.streamedVideo,
          assetPath: lvl.assetPath,
        })),
      })),
    };
  }
}
