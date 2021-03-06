"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const host_1 = require("./host");
/**
 * @deprecated Use the new virtualFs.Host classes from @angular-devkit/core.
 */
class FileSystemSink extends host_1.HostSink {
    constructor(dir, force = false) {
        super(new core_1.virtualFs.ScopedHost(new node_1.NodeJsSyncHost(), core_1.normalize(dir)), force);
    }
}
exports.FileSystemSink = FileSystemSink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXN5c3RlbS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvc2NoZW1hdGljcy9zcmMvc2luay9maWxlc3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsK0NBQTREO0FBQzVELG9EQUEyRDtBQUMzRCxpQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxlQUFRO0lBQzFDLFlBQVksR0FBVyxFQUFFLEtBQUssR0FBRyxLQUFLO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLGdCQUFTLENBQUMsVUFBVSxDQUFDLElBQUkscUJBQWMsRUFBRSxFQUFFLGdCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBQ0Y7QUFKRCx3Q0FJQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7IG5vcm1hbGl6ZSwgdmlydHVhbEZzIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgTm9kZUpzU3luY0hvc3QgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9ub2RlJztcbmltcG9ydCB7IEhvc3RTaW5rIH0gZnJvbSAnLi9ob3N0JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgdGhlIG5ldyB2aXJ0dWFsRnMuSG9zdCBjbGFzc2VzIGZyb20gQGFuZ3VsYXItZGV2a2l0L2NvcmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlU3lzdGVtU2luayBleHRlbmRzIEhvc3RTaW5rIHtcbiAgY29uc3RydWN0b3IoZGlyOiBzdHJpbmcsIGZvcmNlID0gZmFsc2UpIHtcbiAgICBzdXBlcihuZXcgdmlydHVhbEZzLlNjb3BlZEhvc3QobmV3IE5vZGVKc1N5bmNIb3N0KCksIG5vcm1hbGl6ZShkaXIpKSwgZm9yY2UpO1xuICB9XG59XG4iXX0=