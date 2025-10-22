import { expect, it, describe } from "vitest";
import {Equal, Expect} from "../../helper";

/**
 * 복잡한 object의 타입 추론하기
 * @param config
 * @param override
 */

type EXAMPLE_CONFIG_TYPE<T> = {
    apiEndpoint: string,
    apiVersion: string,
    apiKey: string,
    rawConfig: {
        featureFlags: {
            homePage: T,
            loginPage: {
                showCaptcha: boolean,
                showConfirmPassword: boolean,
            },
        },
    },
}
export const getHomePageFeatureFlags = <T>(
    config:EXAMPLE_CONFIG_TYPE<T>,
    override: (flags: T) => T
) => {
    return override(config.rawConfig.featureFlags.homePage);
};

describe("getHomePageFeatureFlags", () => {
    const EXAMPLE_CONFIG = {
        apiEndpoint: "https://api.example.com",
        apiVersion: "v1",
        apiKey: "1234567890",
        rawConfig: {
            featureFlags: {
                homePage: {
                    showBanner: true,
                    showLogOut: false,
                },
                loginPage: {
                    showCaptcha: true,
                    showConfirmPassword: false,
                },
            },
        },
    };
    it("Should return the homePage flag object", () => {
        const flags = getHomePageFeatureFlags(
            EXAMPLE_CONFIG,
            (defaultFlags) => defaultFlags
        );

        expect(flags).toEqual({
            showBanner: true,
            showLogOut: false,
        });

        type tests = [
            Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
        ];
    });

    it("Should allow you to modify the result", () => {
        const flags = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
            ...defaultFlags,
            showBanner: false,
        }));

        expect(flags).toEqual({
            showBanner: false,
            showLogOut: false,
        });

        type tests = [
            Expect<Equal<typeof flags, { showBanner: boolean; showLogOut: boolean }>>
        ];
    });
});


/**
 * 타입 안전한 Feature Flag 관리
 *
 */

type FeatureFlags = {
    homePage: { showBanner: boolean; showLogout: boolean };
    loginPage: { showCaptcha: boolean; showConfirmPassword: boolean };
};

type AppConfig = {
    featureFlags: FeatureFlags;
};

const config: AppConfig = {
    featureFlags: {
        homePage: { showBanner: true, showLogout: false },
        loginPage: { showCaptcha: false, showConfirmPassword: true },
    },
};


type KeyofFeatureFlags = keyof AppConfig["featureFlags"]
function modifyFeatureFlags<T extends  KeyofFeatureFlags>(key:T,override: (flags: FeatureFlags[T]) => FeatureFlags[T]){

}

modifyFeatureFlags("homePage", (flags) => ({
    ...flags,
    showBanner:true, // ✅ 자동 완성 + 타입 안전,
    // showWrongKey: true ❌ 오류 발생
}));