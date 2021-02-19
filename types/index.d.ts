// Type definitions for cordova.plugins.autoStart

/// <reference types="cordova"/>

interface AutoStartInterface {
    enable(): void;
    enableService(id: string): void;
    disable(): void;
}

interface CordovaPlugins {
    autoStart: AutoStartInterface;
}
