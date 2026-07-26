import { MetadataKeys } from './metadata-key';
import "reflect-metadata"

export type MetadataKey =
    (typeof MetadataKeys)[keyof typeof MetadataKeys];

export class Reflector {
    
    /**
     * Defines the meta data of a decorator attached function or class
     */
    public defineMetadata(
        key:MetadataKey,
        value:unknown,
        target:object,
        propertyKey?:string|symbol,
    ):void{
        if (propertyKey !== undefined) {
         Reflect.defineMetadata(key, value, target, propertyKey);
        } else {
         Reflect.defineMetadata(key, value, target);
        }
    }

    /**
     * Based on the demand the DI is done with this
     */
    public getMetadata<T>(
        key:MetadataKey,
        target:object,
        propertyKey?:string|symbol
    ):T|undefined {
        if(propertyKey !== undefined) {
            return Reflect.getMetadata(
                key,
                target,
                propertyKey
            )as T | undefined;
        }
        
        return Reflect.getMetadata(
            key,
            target
        )as T | undefined;
    }

    /**
     * Check if an entry across some key exist or not
     */
    hasMetadata(
        key:MetadataKey,
        target:object,
        propertyKey?:string|symbol
    ):boolean{
        if(propertyKey !== undefined) {
            return Reflect.hasMetadata(
                key,
                target,
                propertyKey
            )
        }
        return Reflect.hasMetadata(
            key,
            target
        )
    }
}