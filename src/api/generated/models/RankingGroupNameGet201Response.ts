/* tslint:disable */
/* eslint-disable */
/**
 * vitaminD backend api
 * バックエンドのAPIの仕様書です
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RankingGroupNameGet201ResponseRankingInner } from './RankingGroupNameGet201ResponseRankingInner';
import {
    RankingGroupNameGet201ResponseRankingInnerFromJSON,
    RankingGroupNameGet201ResponseRankingInnerFromJSONTyped,
    RankingGroupNameGet201ResponseRankingInnerToJSON,
} from './RankingGroupNameGet201ResponseRankingInner';

/**
 * 
 * @export
 * @interface RankingGroupNameGet201Response
 */
export interface RankingGroupNameGet201Response {
    /**
     * 
     * @type {Array<RankingGroupNameGet201ResponseRankingInner>}
     * @memberof RankingGroupNameGet201Response
     */
    ranking?: Array<RankingGroupNameGet201ResponseRankingInner>;
}

/**
 * Check if a given object implements the RankingGroupNameGet201Response interface.
 */
export function instanceOfRankingGroupNameGet201Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RankingGroupNameGet201ResponseFromJSON(json: any): RankingGroupNameGet201Response {
    return RankingGroupNameGet201ResponseFromJSONTyped(json, false);
}

export function RankingGroupNameGet201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RankingGroupNameGet201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ranking': !exists(json, 'ranking') ? undefined : ((json['ranking'] as Array<any>).map(RankingGroupNameGet201ResponseRankingInnerFromJSON)),
    };
}

export function RankingGroupNameGet201ResponseToJSON(value?: RankingGroupNameGet201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ranking': value.ranking === undefined ? undefined : ((value.ranking as Array<any>).map(RankingGroupNameGet201ResponseRankingInnerToJSON)),
    };
}

