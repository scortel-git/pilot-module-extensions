/**
 * Hello World Example - Basic PILOT Extensions Application
 * This is the simplest possible application to demonstrate the basics
 */

Ext.define('Store.dwr-data-license-info.Module', {
    extend: 'Ext.Component',

    /**
     * Initialization function - called when the application loads
     */
    initModule: function () {
        // console.log('Hello World application loaded!')

        // 1. CREATE NAVIGATION TAB FOR LEFT PANEL
        var navTab = Ext.create('Pilot.utils.LeftBarPanel', {
            title: 'Data Licensing',          // Tab title
            iconCls: 'fa fa-globe',        // FontAwesome icon
            iconAlign: 'top',              // Icon position
            minimized: true,               // Start minimized left menu
            items: [
                //First panel with left menu button
                {
                    xtype: 'panel',
                    title: 'Data Licensing',
                    iconCls: 'fa fa-creative-commons-by',
                    // Buttons in the navigation tab header
                    // tools: [
                    //     {
                    //         xtype: 'button',
                    //         iconCls: 'fa fa-globe',
                    //         handler: function () {
                    //             Ext.Msg.alert('Hello World!',
                    //                 'This is a custom button in the navigation tab.\n\n' +
                    //                 'You can add any content or functionality here!');
                    //         }
                    //     }],
                    html: `
                <div style="padding: 20px; text-align: center;">
                    <h1>Data Licensing Information</h1>
                    <p>The data is licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence, allowing users to share and adapt the data, including for commercial purposes, provided that appropriate attribution is given.</p>
                    <p>The licence applies exclusively to the datasets and data products provided through the platform. It does not cover the GPS software, platform interface, source code, or other components of the system.</p>
                    <div style="padding: 15px">
                        <ul style="text-align: left; display: inline-block;">
                            <li>View the applicable data licence and its terms.</li>
                            <li>Access the official Creative Commons licence documentation.</li>
                            <li>Review attribution requirements for the use and redistribution of datasets.</li>
                        </ul>
                    </div>
                </div>
            `,
                    layout: 'fit'
                },
            ]
        });

        // 2. CREATE MAIN CONTENT PANEL
        var mainPanel = Ext.create('Ext.panel.Panel', {
            html: `            
                <div style="padding: 30px;">
                    <h2>Data Licensing Information</h2>
                    <h3>Creative Commons Attribution 4.0 International (CC BY 4.0)</h3>
                    <p>The datasets made available through this platform are licensed under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).</p>
                    <p>This licence allows users to:</p>
                    <ul>
                        <li><b>Share</b> – copy and redistribute the data in any medium or format.</li>
                        <li><b>Adapt</b> – remix, transform and build upon the data for any purpose, including commercial use.</li>
                    </ul>
                    <h4>Attribution requirements</h4>
                    <p>When sharing or redistributing the data, users must:</p>
                    <ul>
                        <li>Give appropriate credit to the original data provider.</li>
                        <li>Provide a reference or link to the CC BY 4.0 licence.</li>
                        <li>Indicate whether modifications have been made to the original data.</li>
                        <li>Retain relevant attribution and licensing information supplied with the data.</li>
                    </ul>
                    <h4>Scope of the licence</h4>
                    <p>The CC BY 4.0 licence applies exclusively to the datasets and data products made available through this platform.</p>
                    <p>It does not apply to the GPS software, platform interface, source code, or other components of the system.</p>
                    <p>Data may have been collected, processed, transformed or aggregated before being made available. Where applicable, such modifications should be indicated when the data is redistributed.</p>
                    <h4>Official licence documentation</h4>
                    <p>For the complete licence terms and conditions, please refer to the official Creative Commons documentation:</p>
                    <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>
                    <br>
                    <a href="https://creativecommons.org/licenses/by/4.0/legalcode">View the full legal code</a>
                </div>
            `,
            layout: 'fit'
        });

        // 3. LINK NAVIGATION TAB WITH MAIN PANEL
        // This ensures clicking the tab shows the correct content
        navTab.map_frame = mainPanel;

        // 4. ADD COMPONENTS TO PILOT INTERFACE
        skeleton.navigation.add(navTab);       // Add tab to left navigation
        skeleton.mapframe.add(mainPanel);      // Add panel to main area

        // 5. ADD BUTTON TO HEADER (Optional)
        skeleton.header.insert(5, {
            xtype: 'button',
            // cls: 'header_tool hello_world-header-btn',
            text: 'Data Licensing',
            // iconCls: 'fa fa-creative-commons-by',
            tooltip: 'Data License Info',
            // style: 'background-color: #71717A; color: white;',
            style: {
                backgroundColor: '#71717A',
                // color: '#ffffff !important',
                // color: '#FFFFFF'
                // borderColor: '#2E7D32'
            },
            listeners: {
                afterrender: function (button) {
                    button.getEl().down('.x-btn-inner').setStyle('color', '#ffffff');
                }
            },
            handler: function () {
                Ext.Msg.alert('Data Licensing Information',
                              '<p>The datasets made available through this platform are licensed under the ' +
                              '<strong>Creative Commons Attribution 4.0 International (CC BY 4.0)</strong> licence.</p>' +
                              '<p>For the complete licence terms and conditions, please refer to the official documentation:</p>' +
                              '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">' +
                              'Creative Commons Attribution 4.0 International (CC BY 4.0)</a></p>' +
                              '<p><a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank" rel="noopener noreferrer">' +
                              'View the full legal code</a></p>' +
                              '<hr>' +
                              '<p><em>The licence applies exclusively to the datasets and data products provided through this platform. ' +
                              'It does not apply to the GPS software, platform interface, source code, or other components of the system.</em></p>',
                              'The datasets made available through this platform are licensed under the Creative Commons Attribution 4.0 International licence (CC BY 4.0).\n\n' +
                              'For the complete licence terms and conditions, please refer to the official Creative Commons documentation:' +
                              '<a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International (CC BY 4.0)</a>' +
                              '<a href="https://creativecommons.org/licenses/by/4.0/legalcode">View the full legal code</a>');
            }
        });

        // 6. LOAD CUSTOM STYLES
        // this.loadStyles();

        // console.log('Hello World application initialized successfully!');
    },

    /**
     * Load custom CSS styles for the application
     */
    // loadStyles: function () {
    //     var cssLink = document.createElement("link");
    //     cssLink.setAttribute("rel", "stylesheet");
    //     cssLink.setAttribute("type", "text/css");
    //     cssLink.setAttribute("href", '/store/dwr-data-license-info/style.css');
    //     document.head.appendChild(cssLink);
    // }
});
