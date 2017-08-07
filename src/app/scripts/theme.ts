// Copyright (c) Wictor Wilén. All rights reserved. 
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

/**
 * Class for managing Microsoft Teams themes
 * idea borrowed from the Dizz: https://github.com/richdizz/Microsoft-Teams-Tab-Themes/blob/master/app/config.html
 * Uses a hierarchical styles approach with a simple stylesheet
 */
export class TeamsTheme {
    /**
     * Set up themes on a page
     */
    public static fix(context?:any) {
        microsoftTeams.initialize();
        microsoftTeams.registerOnThemeChangeHandler(TeamsTheme.themeChanged);
        if (context) {
            TeamsTheme.themeChanged(context.theme);
        }
        else {
            microsoftTeams.getContext((context: any) => {
                TeamsTheme.themeChanged(context.theme);
            })
        }
    }
    /**
     * Manages theme changes
     * @param theme default|contrast|dark
     */
    public static themeChanged(theme: string) {
        let bodyElement:HTMLElement = document.getElementsByTagName("body")[0];

        switch (theme) {
            case "dark":
            case "contrast": 
                bodyElement.className = "theme-" + theme;
                break;
            case "default":
                bodyElement.className = "";
        }
    }
}