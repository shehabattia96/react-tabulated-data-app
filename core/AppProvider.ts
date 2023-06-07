import { AppProviderInterface } from "./AppProviderInterface";

var _appProvider: AppProviderInterface;

function setAppProvider(appProvider: AppProviderInterface) {
    _appProvider = appProvider;
}

function getAppProvider(): AppProviderInterface {
    return _appProvider;
}

export {
    setAppProvider,
    getAppProvider
};