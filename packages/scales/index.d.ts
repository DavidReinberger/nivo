/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare module '@nivo/scales' {
    export interface LinearScale {
        type: 'linear'
        min?: 'auto' | number
        max?: 'auto' | number
        stacked?: boolean
        reverse?: boolean
    }

    export interface PointScale {
        type: 'point'
    }

    export interface TimeScale {
        type: 'time'
        format?: string
        precision?: 'millisecond' | 'second' | 'minute' | 'hour' | 'month' | 'year' | 'day'
    }

    export interface LogScale {
        type: 'log'
        base?: number
        min?: 'auto' | number
        max?: 'auto' | number
    }

    export type Scale = LinearScale | PointScale | TimeScale | LogScale

    export type ScaleFunc = (value: string | number | Date) => number
}
