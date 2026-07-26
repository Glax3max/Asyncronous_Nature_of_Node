import { Constructor, CreateRouteDefinitionOptions, RouteDefinition } from './types';
import { Reflector } from "./Reflector";

/**
 * Discovers
 */


export class MetadataScanner {
    constructor(
        private readonly reflector:Reflector
    ){}
    
    public scan(
        controller:Constructor
    ):RouteDefinition[] {

    }

    private getBasePath(
        controller:Constructor
    ):string {
        
        const baseUrls = controller
    }

    private getMethods(
        controller:Constructor
    ):string[] {
        
    }

    private createRouteDefinition(
        options:CreateRouteDefinitionOptions,
    ):RouteDefinition{}

}