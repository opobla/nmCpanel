/*
 * File: app/store/ChannelStats.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.ChannelStats', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.ChannelStats',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'MyApp.model.ChannelStats',
            storeId: 'ChannelStats',
            proxy: {
                type: 'ajax',
                url: '/nmdadb/channel/stats/default/default',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});