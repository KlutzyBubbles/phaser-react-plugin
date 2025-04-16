import { Plugins } from 'phaser';

export class ExamplePlugin extends Plugins.BasePlugin {

    data;

    constructor(pluginManager) {
        super(pluginManager);
    }

    init() {
        console.log('ExamplePlugin init');
        this.data = 'init';
    }

    start() {
        console.log('ExamplePlugin start');
        this.data = 'start';
    }

    stop() {
        console.log('ExamplePlugin stop');
        this.data = 'stop';
    }

    destroy() {
        console.log('ExamplePlugin destroy');
        this.data = undefined;
    }
}