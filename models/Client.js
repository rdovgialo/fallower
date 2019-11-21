class Client {
    constructor(){
        this.data = null;
    };

    create(data){
        const newData = {
        isntance: data.isntance,
        locales: data.locales, 
        plugin: data.plugin,
        pluginVersion: data.pluginVersion,
        scope: data.scope
        }
        this.data = newData;

    }

    getData(){
        return this.data;
    }

}

module.exports(Client)