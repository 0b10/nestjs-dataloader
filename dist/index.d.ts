import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import DataLoader from 'dataloader';
import { Observable } from 'rxjs';
export interface NestDataLoader<ID, Type> {
    generateDataLoader(): DataLoader<ID, Type>;
}
export declare class DataLoaderInterceptor implements NestInterceptor {
    private readonly moduleRef;
    constructor(moduleRef: ModuleRef);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export declare const Loader: (...dataOrPipes: any[]) => ParameterDecorator;
