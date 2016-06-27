module DOS.CFAP.WebResources {
    export abstract class Entity {
        constructor(public route: string, public id?: string) { }
    }
}