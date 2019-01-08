import { Bray } from '../../models/bray'

export interface BrayStateModel {
    brays: Array<Bray>
}

/**
 * Load Brays
 */
export class LoadBrays {
    static readonly type = '[Bray] Load Brays'
}

export class LoadBraysSuccess {
    static readonly type = '[Bray] Load Brays Success'
    constructor(public brays: Array<Bray>) {}
}

export class LoadBraysFailure {
    static readonly type = '[Bray] Load Brays Failure'
    constructor(public error: any) {}
}

/**
 * Add Bray
 */
export class AddBray {
    static readonly type = '[Bray] Add Bray'
    constructor(public bray: Bray) {}
}

export class AddBrayFailure {
    static readonly type = '[Bray] Add Bray Failure'
    constructor(public error: any) {}
}

/**
 * Update Bray
 */
export class UpdateBray {
    static readonly type = '[Bray] Update Bray'
    constructor(public bray: Bray) {}
}

export class UpdateBrayFailure {
    static readonly type = '[Bray] Update Bray Failure'
    constructor(public error: any) {}
}

/**
 * Remove Bray
 */
export class RemoveBray {
    static readonly type = '[Bray] Remove Bray'
    constructor(public documentId: string) {}
}
