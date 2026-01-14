// Public Stub for ExtensionStore
// Rename this file to ExtensionStore.js to run the application without the proprietary extension engine.

class ExtensionStore {
    constructor() {
        this.menuItems = [];
        this.extensions = [];
        this.listeners = [];
        this.settingsWidgets = {
            general: [],
            appearance: [],
            system: []
        };
        this.sidebarVisible = true;
        this.sidebarOverride = null;
        this.dashboardOverride = null;
    }

    subscribe(listener) { 
        return () => {}; 
    }
    
    notify() {}
    
    getExtensions() { return []; }
    getMenuItems() { return []; }
    getGameActions() { return []; }
    getCustomGames() { return []; }
    getGameDetailsWidgets() { return []; }
    getAboutWidgets() { return []; }
    getSettingsWidgets(tab) { return []; }
    getGameImages(gameId) { return {}; }
    getGameGlow(gameId) { return null; }
    getMusic() { return null; }
    getPage(id) { return null; }
    
    getSidebarVisible() { return this.sidebarVisible; }
    setSidebarVisible(visible) { this.sidebarVisible = visible; }
    registerSidebar(component) { this.sidebarOverride = component; }
    getSidebarOverride() { return this.sidebarOverride; }
    registerDashboard(component) { this.dashboardOverride = component; }
    getDashboardOverride() { return this.dashboardOverride; }
    
    getDefaultView() { return null; }
    getNavigationRequest() { return null; }
}

export default new ExtensionStore();
