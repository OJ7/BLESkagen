cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-ble.BLE",
    "file": "plugins/cordova-plugin-ble/ble.js",
    "pluginId": "cordova-plugin-ble",
    "clobbers": [
      "evothings.ble"
    ]
  },
  {
    "id": "cordova-plugin-bluetoothle.BluetoothLe",
    "file": "plugins/cordova-plugin-bluetoothle/www/bluetoothle.js",
    "pluginId": "cordova-plugin-bluetoothle",
    "clobbers": [
      "window.bluetoothle"
    ]
  },
  {
    "id": "cordova-plugin-broadcaster.broadcaster",
    "file": "plugins/cordova-plugin-broadcaster/www/broadcaster.js",
    "pluginId": "cordova-plugin-broadcaster",
    "clobbers": [
      "broadcaster"
    ]
  },
  {
    "id": "io.gvox.plugin.phonecalltrap.PhoneCallTrap",
    "file": "plugins/io.gvox.plugin.phonecalltrap/www/PhoneCallTrap.js",
    "pluginId": "io.gvox.plugin.phonecalltrap",
    "clobbers": [
      "window.PhoneCallTrap"
    ]
  },
  {
    "id": "net.coconauts.notification-listener.NotificationListener",
    "file": "plugins/net.coconauts.notification-listener/www/notification-listener.js",
    "pluginId": "net.coconauts.notification-listener",
    "clobbers": [
      "notificationListener"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-ble": "2.0.1",
  "cordova-plugin-bluetoothle": "4.4.3",
  "cordova-plugin-broadcaster": "3.1.1",
  "cordova-plugin-whitelist": "1.3.3",
  "io.gvox.plugin.phonecalltrap": "0.1.2",
  "net.coconauts.notification-listener": "0.0.2",
  "cordova-plugin-device": "2.0.2",
  "cordova-plugin-background-mode": "0.7.2"
};
// BOTTOM OF METADATA
});